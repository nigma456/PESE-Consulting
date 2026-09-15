const sharp = require('sharp');
const path = require('path');

const svgPath = path.join(__dirname, 'public', 'logo-light.svg');
const outDir = path.join(__dirname, 'public');

const sizes = [
  { suffix: 'logo-1024', width: 1024 },
  { suffix: 'logo-512', width: 512 },
  { suffix: 'logo-256', width: 256 },
];

(async () => {
  for (const { suffix, width } of sizes) {
    const outPath = path.join(outDir, `${suffix}.png`);
    await sharp(svgPath, { density: 384 })
      .resize({ width })
      .png()
      .toFile(outPath);
    console.log(`Generated: ${outPath}`);
  }
  console.log('Done!');
})();
