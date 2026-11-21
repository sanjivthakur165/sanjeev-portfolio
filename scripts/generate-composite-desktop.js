import sharp from 'sharp';

async function generateCompositeDesktop() {
  const skyWidth = 2560;
  const skyHeight = 1440;

  // 1. Load the generated widescreen sky
  const skyImage = sharp('public/images/night-twilight-sky.jpg');

  // 2. Load and resize the left palm to fit height 1440
  // Original left palm: 245 x 1080 -> scaled to 1440 height: width ~ 326
  const leftPalmResized = await sharp('public/images/palm-tree-left.png')
    .resize(null, skyHeight, { fit: 'fill' })
    .toBuffer();

  // 3. Load and resize the right palm to fit height 1440
  // Original right palm: 408 x 1080 -> scaled to 1440 height: width ~ 544
  const rightPalmResized = await sharp('public/images/palm-tree-right.png')
    .resize(null, skyHeight, { fit: 'fill' })
    .toBuffer();

  const rightPalmMeta = await sharp(rightPalmResized).metadata();
  const rightX = skyWidth - rightPalmMeta.width;

  // 4. Create a center darkening overlay for readability (SVG gradient)
  // Transparent on left and right edges (so palm trees and sunset sky shine through brightly)
  // Dark translucent indigo/navy in the center 1200px (so text is crisp and readable)
  const overlaySvg = `
    <svg width="${skyWidth}" height="${skyHeight}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Horizontal vignette: dark in center, clear on edges -->
        <linearGradient id="centerH" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#071026" stop-opacity="0.25" />
          <stop offset="18%" stop-color="#071026" stop-opacity="0.45" />
          <stop offset="35%" stop-color="#071026" stop-opacity="0.75" />
          <stop offset="65%" stop-color="#071026" stop-opacity="0.75" />
          <stop offset="82%" stop-color="#071026" stop-opacity="0.45" />
          <stop offset="100%" stop-color="#071026" stop-opacity="0.25" />
        </linearGradient>

        <!-- Vertical gradient: slightly deeper at top, soft at horizon -->
        <linearGradient id="centerV" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#071026" stop-opacity="0.5" />
          <stop offset="60%" stop-color="#071026" stop-opacity="0.65" />
          <stop offset="100%" stop-color="#071026" stop-opacity="0.4" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#centerH)" />
      <rect width="100%" height="100%" fill="url(#centerV)" mix-blend-mode="multiply" />
    </svg>
  `;

  // Also create a version WITHOUT center overlay, so CSS can control overlays dynamically!
  await skyImage
    .composite([
      { input: leftPalmResized, top: 0, left: 0 },
      { input: rightPalmResized, top: 0, left: rightX }
    ])
    .jpeg({ quality: 93 })
    .toFile('public/images/night-palm-widescreen-pure.jpg');

  // And a version with the gentle cinematic night atmosphere
  await sharp('public/images/night-twilight-sky.jpg')
    .composite([
      { input: leftPalmResized, top: 0, left: 0 },
      { input: rightPalmResized, top: 0, left: rightX },
      { input: Buffer.from(overlaySvg), top: 0, left: 0 }
    ])
    .jpeg({ quality: 93 })
    .toFile('public/images/night-palm-widescreen-toned.jpg');

  console.log('Successfully generated night-palm-widescreen-pure.jpg and night-palm-widescreen-toned.jpg!');
}

generateCompositeDesktop().catch(console.error);
