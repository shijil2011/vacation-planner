const fs = require('fs');

const files = [
  'app/api/currency/route.ts',
  'app/api/hotels/route.ts',
  'app/api/places/route.ts',
  'app/api/save-trip/route.ts',
  'app/api/weather/route.ts',
];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/catch \(error\)/, 'catch (_error)');
  fs.writeFileSync(f, content);
});

let errorPage = fs.readFileSync('app/error.tsx', 'utf8');
errorPage = errorPage.replace(/error, reset/, 'reset');
fs.writeFileSync('app/error.tsx', errorPage);

let tripPage = fs.readFileSync('app/trip/[id]/page.tsx', 'utf8');
tripPage = tripPage.replace(/import { DESTINATION_COORDS } from "@\/lib\/constants"; \/\/ Assuming it exists, if not we inline\n/, '');
tripPage = tripPage.replace(/any/g, 'unknown');
fs.writeFileSync('app/trip/[id]/page.tsx', tripPage);
