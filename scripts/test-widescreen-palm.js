import sharp from 'sharp';

async function createWidescreenPalm() {
  const inputPath = 'reference/palm-ref.jpg';
  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  
  const inW = info.width; // 608
  const inH = info.height; // 1080
  const splitX = 275; // column between left palm and right palm

  // Target widescreen 1920 x 1080
  const outW = 1920;
  const outH = 1080;
  const channels = info.channels;
  const outBuffer = Buffer.alloc(outW * outH * channels);

  // Left portion width in output: 400px (or keeping original aspect ratio)
  // Let's keep original scale 1:1 vertically (height = 1080)
  // Left palm tree: x=0 to splitX (width = 275)
  // Right palm tree: x=splitX to 608 (width = 333)
  // In a 1920 wide canvas:
  // Left palm placed at x = 0 to 275
  // Right palm placed at x = (1920 - 333) = 1587 to 1920
  // Center sky: from x = 275 to 1587 (width 1312)
  const leftW = splitX;
  const rightW = inW - splitX;
  const rightStartX = outW - rightW;

  for (let y = 0; y < outH; y++) {
    // 1. Copy left palm
    for (let x = 0; x < leftW; x++) {
      const srcIdx = (y * inW + x) * channels;
      const dstIdx = (y * outW + x) * channels;
      outBuffer[dstIdx] = data[srcIdx];
      outBuffer[dstIdx + 1] = data[srcIdx + 1];
      outBuffer[dstIdx + 2] = data[srcIdx + 2];
    }

    // Sky column pixel at splitX
    const skyIdx = (y * inW + splitX) * channels;
    const r = data[skyIdx];
    const g = data[skyIdx + 1];
    const b = data[skyIdx + 2];

    // 2. Fill center sky with smooth horizontal expansion
    for (let x = leftW; x < rightStartX; x++) {
      const dstIdx = (y * outW + x) * channels;
      outBuffer[dstIdx] = r;
      outBuffer[dstIdx + 1] = g;
      outBuffer[dstIdx + 2] = b;
    }

    // 3. Copy right palm
    for (let x = 0; x < rightW; x++) {
      const srcIdx = (y * inW + (splitX + x)) * channels;
      const dstIdx = (y * outW + (rightStartX + x)) * channels;
      outBuffer[dstIdx] = data[srcIdx];
      outBuffer[dstIdx + 1] = data[srcIdx + 1];
      outBuffer[dstIdx + 2] = data[srcIdx + 2];
    }
  }

  await sharp(outBuffer, {
    raw: {
      width: outW,
      height: outH,
      channels: channels
    }
  })
  .jpeg({ quality: 92 })
  .toFile('public/images/test-widescreen.jpg');

  console.log('Created public/images/test-widescreen.jpg successfully!');
}

createWidescreenPalm().catch(console.error);
