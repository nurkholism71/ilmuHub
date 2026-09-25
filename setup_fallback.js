import fs from 'fs';
import path from 'path';
import https from 'https';

const publicImagesDir = path.resolve('public/images');

const fallbackDownloads = [
  {
    name: 'class_history.jpg',
    url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80', // Cairo historic architecture
  },
  {
    name: 'class_hadith.jpg',
    url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80', // Study of classic manuscripts
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded ${path.basename(dest)}`);
        resolve();
      });
      fileStream.on('error', reject);
    }).on('error', reject);
  });
}

for (const item of fallbackDownloads) {
  downloadFile(item.url, path.join(publicImagesDir, item.name)).catch(console.error);
}
