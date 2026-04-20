import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = 'C:/projek/nicktio-nextjs-pro-v1-1/package/public/images/hero';

fs.readdirSync(dir).forEach(file => {
  const ext = path.extname(file).toLowerCase();
  
  if (['.jpg', '.jpeg', '.png'].includes(ext)) {
    const inputPath = path.join(dir, file);
    const outputPath = path.join(dir, `${path.basename(file, ext)}.webp`);
    
    sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath)
      .then(() => {
        console.log(`Converted: ${file} -> ${path.basename(outputPath)}`);
        // Hapus file original setelah convert berhasil
        try {
          fs.unlinkSync(inputPath);
        } catch (e) {
          console.error(`Gagal menghapus file awal ${file}`);
        }
      })
      .catch(err => {
        console.error(`Error converting ${file}:`, err);
      });
  }
});
