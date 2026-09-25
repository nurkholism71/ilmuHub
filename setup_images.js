import fs from 'fs';
import path from 'path';
import https from 'https';

const publicImagesDir = path.resolve('public/images');
if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

// Copy local generated images
const brainDir = 'C:\\Users\\nurch\\.gemini\\antigravity\\brain\\f3142053-5153-4fac-b818-05f8c5370a52';
const files = fs.readdirSync(brainDir);

const copyMap = {
  hero: files.find(f => f.startsWith('hero_student_cairo') && f.endsWith('.jpg')),
  nahwu: files.find(f => f.startsWith('class_nahwu') && f.endsWith('.jpg')),
  sharaf: files.find(f => f.startsWith('class_sharaf') && f.endsWith('.jpg')),
};

if (copyMap.hero) {
  fs.copyFileSync(path.join(brainDir, copyMap.hero), path.join(publicImagesDir, 'hero_student.jpg'));
  console.log('Copied hero_student.jpg');
}
if (copyMap.nahwu) {
  fs.copyFileSync(path.join(brainDir, copyMap.nahwu), path.join(publicImagesDir, 'class_nahwu.jpg'));
  console.log('Copied class_nahwu.jpg');
}
if (copyMap.sharaf) {
  fs.copyFileSync(path.join(brainDir, copyMap.sharaf), path.join(publicImagesDir, 'class_sharaf.jpg'));
  console.log('Copied class_sharaf.jpg');
}

// Download high-resolution real photos from Unsplash
const downloads = [
  {
    name: 'class_tajweed.jpg',
    url: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=800&q=80', // Quran on wooden rehal
  },
  {
    name: 'class_arabic.jpg',
    url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80', // Islamic mosque architecture minaret
  },
  {
    name: 'class_english.jpg',
    url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80', // Study desk with laptop
  },
  {
    name: 'tutor_ahmed.jpg',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80', // Ahmed Mohamed portrait
  },
  {
    name: 'tutor_fatimah.jpg',
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80', // Fatimah Zahra hijab portrait
  },
  {
    name: 'tutor_omar.jpg',
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80', // Omar Hassan portrait
  },
  {
    name: 'tutor_sara.jpg',
    url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80', // Sara Ahmed portrait
  },
  {
    name: 'banner_free.jpg',
    url: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80', // Vintage book stack
  },
  {
    name: 'banner_tutor.jpg',
    url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80', // Teacher at whiteboard
  },
  {
    name: 'cairo_skyline.jpg',
    url: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=1600&q=80', // Cairo pyramids & minarets
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

async function run() {
  for (const item of downloads) {
    const dest = path.join(publicImagesDir, item.name);
    try {
      await downloadFile(item.url, dest);
    } catch (err) {
      console.error(`Error downloading ${item.name}:`, err.message);
    }
  }
  console.log('All image assets setup completed!');
}

run();
