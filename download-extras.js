const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
  { url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&q=80', file: 'college.jpg' },
  { url: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=500&q=80', file: 'award.jpg' },
  { url: 'https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?w=500&q=80', file: 'languages.jpg' }
];

const dir = path.join(__dirname, 'public', 'img', 'unsplash');

images.forEach(({url, file}) => {
  const dest = path.join(dir, file);
  https.get(url, (res) => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, (res2) => {
            res2.pipe(fs.createWriteStream(dest));
        });
    } else {
        res.pipe(fs.createWriteStream(dest));
    }
  }).on('error', (err) => console.error(err));
});
console.log('Downloading 3 new images...');
