const csv = require('csv-parser')
const fs = require('fs')
const results = []
fs.createReadStream('csvFiles/courses.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
  });
//  csv path  /Users/nneommy/Dropbox/Job_Search/hatchaway/csvFiles
// current path  /Users/nneommy/Dropbox/Job_Search/hatchaway/index.js