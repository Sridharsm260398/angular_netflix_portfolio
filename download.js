const fs = require('fs');
const https = require('https');
const path = require('path');

const urls = [
  'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500&q=80', // 1
  'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&q=80', // 2
  'https://images.unsplash.com/photo-1627398240411-549b2510f22f?w=500&q=80', // 3 
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&q=80', // 4
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80', // 5
  'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=500&q=80', // 6
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80', // 7
  'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=500&q=80', // 8
  'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=500&q=80', // 9
  'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&q=80', // 10
  'https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=500&q=80'  // 11
];

const dir = path.join(__dirname, 'public', 'img', 'unsplash');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

urls.forEach((url, i) => {
  const dest = path.join(dir, `img-${i+1}.jpg`);
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
console.log('Images downloading...');
