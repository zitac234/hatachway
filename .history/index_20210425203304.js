const data = {}
const fs = require('fs').promises
const csv = require('csv-parser')
const  files = fs.readdirSync('csvFiles')
files.forEach(file => data[file] = [])
(asyfiles.forEach(file =>{
      fs.createReadStream(`csvFiles/${file}`)
      .pipe(csv())
      .on('data', (input) => data[file].push(input))
      .on('end', () => {
        console.log(data);
    });
}))
console.log('data', data)
// console.log('files:', files)

