// news-image-20261126 — penyalin halaman depan koran.
// Halaman depan koran 26 November 2026 sudah jadi sebagai entry.png
// di sebelah file ini. Tugas program ini hanya menaruh salinan persis
// gambar itu di $MAKEFUN_OUTPUT_DIR/entry.png (atau /output kalau
// variabelnya tidak diset). Tidak ada unduhan, tidak ada gambar yang
// digambar saat jalan, jadi setiap run menulis byte yang identik.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

function abort(reason: string): never {
  throw new Error(`news-image-20261126: ${reason}`);
}

function placeFrontPage(): void {
  const folder = fileURLToPath(new URL('.', import.meta.url));
  const picture = join(folder, 'entry.png');
  if (!existsSync(picture)) {
    abort(`entry.png hilang dari ${folder}`);
  }
  const bytes = readFileSync(picture);
  const destinationDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  mkdirSync(destinationDir, { recursive: true });
  const destination = join(destinationDir, 'entry.png');
  writeFileSync(destination, bytes);
  const check = readFileSync(destination);
  if (!check.equals(bytes)) {
    abort('salinan entry.png tidak identik dengan sumber');
  }
  console.log(`entry.png tersalin (${bytes.length} byte)`);
}

placeFrontPage();
