const csv = require('csv-parser')
const fs = require('fs')
const results = []
const  files = fs.readdirSync('csvFiles')
console.log('files:', filese)
fs.createReadStream('csvFiles/courses.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
  });
