const csv = require('csv-parser')
const fs = require('fs')
const  files = fs.readdirSync('csvFiles')
console.log('files:', files)
fs.createReadStream('csvFiles/courses.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
  });
