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
  content = content.replace(/catch \(error\)/, 'catch');
  fs.writeFileSync(f, content);
});
