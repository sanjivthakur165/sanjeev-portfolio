import sharp from 'sharp';

async function extractPalms() {
  const { data, info } = await sharp('reference/palm-ref.jpg').raw().toBuffer({ resolveWithObject: true });
  const w = info.width; // 608
  const h = info.height; // 1080
  const channels = info.channels; // 3

  // 1. Calculate smooth sky profile
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
    rawSky.push({ lum: maxLum, color: skyColor });
  }

  // Smooth sky profile with moving average
  const smoothSky = [];
  for (let y = 0; y < h; y++) {
    let lumSum = 0, rSum = 0, gSum = 0, bSum = 0, count = 0;
    for (let dy = -6; dy <= 6; dy++) {
      const py = Math.min(h - 1, Math.max(0, y + dy));
      lumSum += rawSky[py].lum;
      rSum += rawSky[py].color[0];
      gSum += rawSky[py].color[1];
      bSum += rawSky[py].color[2];
      count++;
    }
    smoothSky.push({
      lum: lumSum / count,
      r: Math.round(rSum / count),
      g: Math.round(gSum / count),
      b: Math.round(bSum / count)
    });
  }

  // 2. Extract Right Palm Tree (contains the big towering tree on right & lower palm & birds)
  const rightXStart = 200; // starts at x = 200 to exclude the left tree's tips completely!
  const rightW = w - rightXStart; // 408
  const rightBuffer = Buffer.alloc(rightW * h * 4); // RGBA

  for (let y = 0; y < h; y++) {
    const sky = smoothSky[y];
    for (let x = 0; x < rightW; x++) {
      const srcX = rightXStart + x;
      const srcIdx = (y * w + srcX) * channels;
      const dstIdx = (y * rightW + x) * 4;

      const r = data[srcIdx];
      const g = data[srcIdx + 1];
      const b = data[srcIdx + 2];
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;

      const diff = sky.lum - lum;
      let alpha = 0;
      if (diff > 26) {
        alpha = Math.min(255, Math.round(((diff - 26) / 36) * 255));
      }

      // Eliminate stray frond tips on mid-left edge while preserving birds below y=780
      if (y < 780 && x < 95) {
        alpha = 0;
      }

      // Rich aubergine silhouette tone
      const tY = y / h;
      const palmR = Math.round(62 * (1 - tY) + 76 * tY);
      const palmG = Math.round(30 * (1 - tY) + 34 * tY);
      const palmB = Math.round(66 * (1 - tY) + 50 * tY);

      rightBuffer[dstIdx] = palmR;
      rightBuffer[dstIdx + 1] = palmG;
      rightBuffer[dstIdx + 2] = palmB;
      rightBuffer[dstIdx + 3] = alpha;
    }
  }

  // 3. Extract Left Palm Tree (from x = 0 to 245)
  const leftW = 245;
  const leftBuffer = Buffer.alloc(leftW * h * 4); // RGBA

  for (let y = 0; y < h; y++) {
    const sky = smoothSky[y];
    for (let x = 0; x < leftW; x++) {
      const srcIdx = (y * w + x) * channels;
      const dstIdx = (y * leftW + x) * 4;

      const r = data[srcIdx];
      const g = data[srcIdx + 1];
      const b = data[srcIdx + 2];
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;

      const diff = sky.lum - lum;
      let alpha = 0;
      if (diff > 26) {
        alpha = Math.min(255, Math.round(((diff - 26) / 36) * 255));
      }

      // Eliminate stray frond tip from opposite tree in upper quadrant
      if (y < 420 && x > 160) {
        alpha = 0;
      }

      // Gentle fade at the very right tip of left palm (x > 225)
      if (x > 225) {
        alpha = Math.round(alpha * ((leftW - x) / 20));
      }

      const tY = y / h;
      const palmR = Math.round(62 * (1 - tY) + 76 * tY);
      const palmG = Math.round(30 * (1 - tY) + 34 * tY);
      const palmB = Math.round(66 * (1 - tY) + 50 * tY);

      leftBuffer[dstIdx] = palmR;
      leftBuffer[dstIdx + 1] = palmG;
      leftBuffer[dstIdx + 2] = palmB;
      leftBuffer[dstIdx + 3] = alpha;
    }
  }

  await sharp(rightBuffer, { raw: { width: rightW, height: h, channels: 4 } })
    .png({ compressionLevel: 8 })
    .toFile('public/images/palm-tree-right.png');

  await sharp(leftBuffer, { raw: { width: leftW, height: h, channels: 4 } })
    .png({ compressionLevel: 8 })
    .toFile('public/images/palm-tree-left.png');

  console.log('Successfully generated perfected palm-tree-right.png and palm-tree-left.png!');
}

extractPalms().catch(console.error);
