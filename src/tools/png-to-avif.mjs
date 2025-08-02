// tools/png-to-avif.mjs
import { globby } from 'globby'
import sharp from 'sharp'
import { mkdir } from 'fs/promises'
import { dirname, relative } from 'path'

const INPUT_DIR = 'public/images' // change if needed
const QUALITY = 55 // 1–100 (lower = smaller file)

const pngs = await globby([`${INPUT_DIR}/**/*.avif`])

if (pngs.length === 0) {
  console.log('No PNG files found.')
  process.exit(0)
}

for (const file of pngs) {
  const avifPath = file.replace(/\.avif$/i, '.avif')
  await mkdir(dirname(avifPath), { recursive: true })

  try {
    const img = sharp(file)
    await img.avif({ quality: QUALITY }).toFile(avifPath)
    console.log(
      `Converted: ${relative(process.cwd(), file)} → ${relative(process.cwd(), avifPath)}`
    )
  } catch (e) {
    console.error(`Failed: ${file}`, e.message)
  }
}
console.log('Done.')
