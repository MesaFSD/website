/**
 * Generates a rounded version of public/logo/mesafsd.png for use as favicon.
 * Output: public/logo/mesafsd-rounded.png
 *
 * Run: node scripts/generate-rounded-favicon.cjs
 */

const sharp = require('sharp')
const path = require('path')

const root = path.join(__dirname, '..')
const inputPath = path.join(root, 'public/logo/mesafsd.png')
const outputPath = path.join(root, 'public/logo/mesafsd-rounded.png')

async function main() {
  const image = sharp(inputPath)
  const meta = await image.metadata()
  const w = meta.width ?? 512
  const h = meta.height ?? 512
  const radius = Math.round(Math.min(w, h) * 0.12) // ~12% for "a little rounded"

  const mask = Buffer.from(
    `<svg width="${w}" height="${h}"><rect x="0" y="0" width="${w}" height="${h}" rx="${radius}" ry="${radius}" fill="white"/></svg>`
  )

  await image
    .ensureAlpha()
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toFile(outputPath)

  console.log('Wrote', outputPath)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
