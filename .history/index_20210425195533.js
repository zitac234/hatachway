const csv = require('csv-parser')
const fs = require('fs')
const results = []
var files = fs.readdirSync('/assets/photos/')
fs.createReadStream('csvFiles/courses.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
  });
