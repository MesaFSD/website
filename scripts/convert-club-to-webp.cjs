/**
 * Converts public/club/*.jpg (and .png) to .webp for faster loading.
 * Run: node scripts/convert-club-to-webp.cjs
 */

const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

const root = path.join(__dirname, '..')
const clubDir = path.join(root, 'public/club')

async function main() {
  const files = fs.readdirSync(clubDir).filter((f) => /\.(jpg|jpeg|png)$/i.test(f))
  for (const file of files) {
    const base = path.basename(file, path.extname(file))
    const inputPath = path.join(clubDir, file)
    const outputPath = path.join(clubDir, `${base}.webp`)
    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath)
    console.log('Wrote', outputPath)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
