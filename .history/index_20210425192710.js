const csv = require('csv-parser')
const fs = require('fs')
const result = []
fs.createReadStream('course.csv').pipe(csv()).on('data', (data) =>results.push(data))
  .on('end', () => {
    console.log(results)