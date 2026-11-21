import sharp from 'sharp';

async function generateSeamlessWidescreen() {
  const { data, info } = await sharp('reference/palm-ref.jpg').raw().toBuffer({ resolveWithObject: true });
  const inW = info.width; // 608
  const inH = info.height; // 1080
  const channels = info.channels; // 3

  // 1. Build pure sky color for each y
  const skyColors = [];
  for (let y = 0; y < inH; y++) {
    let maxG = -1;
    let best = [100, 110, 160];
    // Search in the middle-right open sky gaps
    for (let x = 60; x < inW - 60; x++) {
      const idx = (y * inW + x) * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      // Palm silhouette is dark plum (R > 80, G < 110, B < 110, low luminance)
      // Sky has high brightness
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;
      if (lum > maxG) {
        maxG = lum;
        best = [r, g, b];
      }
    }
    skyColors.push(best);
  }

  // Smooth skyColors vertically with moving average of 7 pixels
  const smoothSky = [];
  for (let y = 0; y < inH; y++) {
    let rSum = 0, gSum = 0, bSum = 0, count = 0;
    for (let dy = -4; dy <= 4; dy++) {
      const py = Math.min(inH - 1, Math.max(0, y + dy));
      rSum += skyColors[py][0];
      gSum += skyColors[py][1];
      bSum += skyColors[py][2];
      count++;
    }
    smoothSky.push([Math.round(rSum / count), Math.round(gSum / count), Math.round(bSum / count)]);
  }

  const outW = 1920;
  const outH = 1080;
  const outBuffer = Buffer.alloc(outW * outH * channels);

  // Define palm zones
  // Left palm: from inX = 0 to 250. Fade out between 170 and 250 (fadeWidth = 80)
  const leftEnd = 250;
  const leftFadeStart = 160;

  // Right palm: from inX = 180 to 608 (width = 428). Place at outW - 428. Fade in first 80px (from inX = 180 to 260)
  const rightStartInX = 180;
  const rightWidth = inW - rightStartInX; // 428
  const rightOutStartX = outW - rightWidth; // 1492
  const rightFadeEnd = rightOutStartX + 80;

  for (let y = 0; y < outH; y++) {
    const sky = smoothSky[y];

    for (let x = 0; x < outW; x++) {
      const outIdx = (y * outW + x) * channels;

      if (x < leftFadeStart) {
        // Pure left palm slice
        const inIdx = (y * inW + x) * channels;
        outBuffer[outIdx] = data[inIdx];
        outBuffer[outIdx + 1] = data[inIdx + 1];
        outBuffer[outIdx + 2] = data[inIdx + 2];
      } else if (x < leftEnd) {
        // Blend left slice into sky
        const t = (x - leftFadeStart) / (leftEnd - leftFadeStart); // 0 -> 1 (sky weight)
        const inIdx = (y * inW + x) * channels;
        outBuffer[outIdx] = Math.round(data[inIdx] * (1 - t) + sky[0] * t);
        outBuffer[outIdx + 1] = Math.round(data[inIdx + 1] * (1 - t) + sky[1] * t);
        outBuffer[outIdx + 2] = Math.round(data[inIdx + 2] * (1 - t) + sky[2] * t);
      } else if (x < rightOutStartX) {
        // Pure sky
        outBuffer[outIdx] = sky[0];
        outBuffer[outIdx + 1] = sky[1];
        outBuffer[outIdx + 2] = sky[2];
      } else if (x < rightFadeEnd) {
        // Blend sky into right palm slice
        const t = (x - rightOutStartX) / (rightFadeEnd - rightOutStartX); // 0 -> 1 (right palm weight)
        const inX = rightStartInX + (x - rightOutStartX);
        const inIdx = (y * inW + inX) * channels;
        outBuffer[outIdx] = Math.round(sky[0] * (1 - t) + data[inIdx] * t);
        outBuffer[outIdx + 1] = Math.round(sky[1] * (1 - t) + data[inIdx + 1] * t);
        outBuffer[outIdx + 2] = Math.round(sky[2] * (1 - t) + data[inIdx + 2] * t);
      } else {
        // Pure right palm slice
        const inX = rightStartInX + (x - rightOutStartX);
        const inIdx = (y * inW + inX) * channels;
        outBuffer[outIdx] = data[inIdx];
        outBuffer[outIdx + 1] = data[inIdx + 1];
        outBuffer[outIdx + 2] = data[inIdx + 2];
      }
    }
  }

  // Also copy the flying birds from reference image into the sunset sky (around x=960, y=790)
  // Birds are located in reference at x: 220..330, y: 770..830
  const birdSrcX = 220;
  const birdSrcY = 770;
  const birdW = 110;
  const birdH = 65;
  const birdDstX = Math.round((outW - birdW) / 2); // perfectly centered in the sunset sky!
  const birdDstY = birdSrcY;

  for (let by = 0; by < birdH; by++) {
    const srcY = birdSrcY + by;
    const dstY = birdDstY + by;
    for (let bx = 0; bx < birdW; bx++) {
      const srcX = birdSrcX + bx;
      const dstX = birdDstX + bx;
      const srcIdx = (srcY * inW + srcX) * channels;
      const dstIdx = (dstY * outW + dstX) * channels;

      const r = data[srcIdx];
      const g = data[srcIdx + 1];
      const b = data[srcIdx + 2];
      const sky = smoothSky[srcY];

      // Bird pixels are darker than sky
      const lumDiff = (sky[0] + sky[1] + sky[2]) - (r + g + b);
      if (lumDiff > 25) {
        // It's a bird silhouette pixel!
        const alpha = Math.min(1, lumDiff / 90);
        outBuffer[dstIdx] = Math.round(outBuffer[dstIdx] * (1 - alpha) + r * alpha);
        outBuffer[dstIdx + 1] = Math.round(outBuffer[dstIdx + 1] * (1 - alpha) + g * alpha);
        outBuffer[dstIdx + 2] = Math.round(outBuffer[dstIdx + 2] * (1 - alpha) + b * alpha);
      }
    }
  }

  await sharp(outBuffer, {
    raw: {
      width: outW,
      height: outH,
      channels: channels
    }
  })
  .jpeg({ quality: 93 })
  .toFile('public/images/night-palm-bg-desktop.jpg');

  console.log('Created public/images/night-palm-bg-desktop.jpg successfully!');
}

generateSeamlessWidescreen().catch(console.error);
