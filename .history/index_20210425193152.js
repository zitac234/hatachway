const csv = require('csv-parser')
const fs = require('fs')
const result = []
fs.createReadStream('courses.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
  });
//  csv path  /Users/nneommy/Dropbox/Job_Search/hatchaway/csvFiles
//