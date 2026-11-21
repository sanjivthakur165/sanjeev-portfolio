import sharp from 'sharp';

async function generateMasterBackgrounds() {
  const { data, info } = await sharp('reference/palm-ref.jpg').raw().toBuffer({ resolveWithObject: true });
  const w = info.width; // 608
  const h = info.height; // 1080
  const channels = info.channels; // 3

  // 1. Calculate clean smooth sky profile from reference
  const rawSky = [];
  for (let y = 0; y < h; y++) {
    let maxLum = -1;
    let skyColor = [100, 110, 160];
    for (let x = 40; x < w - 40; x++) {
      const idx = (y * w + x) * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;
      if (lum > maxLum) {
        maxLum = lum;
        skyColor = [r, g, b];
      }
    }
    rawSky.push(skyColor);
  }

  // Moving average smoothing (11-pixel window)
  const smoothSky = [];
  for (let y = 0; y < h; y++) {
    let rSum = 0, gSum = 0, bSum = 0, count = 0;
    for (let dy = -5; dy <= 5; dy++) {
      const py = Math.min(h - 1, Math.max(0, y + dy));
      rSum += rawSky[py][0];
      gSum += rawSky[py][1];
      bSum += rawSky[py][2];
      count++;
    }
    smoothSky.push([
      Math.round(rSum / count),
      Math.round(gSum / count),
      Math.round(bSum / count)
    ]);
  }

  // 2. Generate 2560 x 1440 Widescreen Sky
  const skyW = 2560;
  const skyH = 1440;
  const skyBuffer = Buffer.alloc(skyW * skyH * 3);

  for (let y = 0; y < skyH; y++) {
    const normY = y / skyH;
    const srcY = Math.min(h - 1, Math.floor(normY * h));
    const nextY = Math.min(h - 1, srcY + 1);
    const fracY = (normY * h) - srcY;

    // Base color from reference
    const rBase = smoothSky[srcY][0] * (1 - fracY) + smoothSky[nextY][0] * fracY;
    const gBase = smoothSky[srcY][1] * (1 - fracY) + smoothSky[nextY][1] * fracY;
    const bBase = smoothSky[srcY][2] * (1 - fracY) + smoothSky[nextY][2] * fracY;

    for (let x = 0; x < skyW; x++) {
      const outIdx = (y * skyW + x) * 3;
      // Gentle horizontal gradient: slightly warmer in the sunset center
      const normX = x / skyW;
      const centerFactor = 1 - Math.abs(normX - 0.5) * 0.4;
      
      let r = rBase;
      let g = gBase;
      let b = bBase;

      // In the lower half, center sunset has extra rich peach glow
      if (normY > 0.45) {
        const sunsetWeight = (normY - 0.45) / 0.55;
        r = r * (1 + 0.05 * centerFactor * sunsetWeight);
        g = g * (1 + 0.03 * centerFactor * sunsetWeight);
      }

      skyBuffer[outIdx] = Math.min(255, Math.max(0, Math.round(r)));
      skyBuffer[outIdx + 1] = Math.min(255, Math.max(0, Math.round(g)));
      skyBuffer[outIdx + 2] = Math.min(255, Math.max(0, Math.round(b)));
    }
  }

  await sharp(skyBuffer, { raw: { width: skyW, height: skyH, channels: 3 } })
    .jpeg({ quality: 94 })
    .toFile('public/images/night-twilight-sky.jpg');

  // 3. Generate Mobile Optimized Wallpaper directly from reference
  await sharp('reference/palm-ref.jpg')
    .resize(750, 1334, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 92 })
    .toFile('public/images/night-palm-mobile.jpg');

  console.log('Successfully generated night-twilight-sky.jpg and night-palm-mobile.jpg!');
}

generateMasterBackgrounds().catch(console.error);
