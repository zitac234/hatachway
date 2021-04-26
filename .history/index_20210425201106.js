const input = {}
const fs = require('fs')
const csv = require('csv-parser')
const  files = fs.readdirSync('csvFiles')
files.forEach(file => input[file] = [])
files.forEach(file =>{
      fs.createReadStream(`csvFiles/${file}`)
      .pipe(csv())
      .on('data', (input) => input[file].push(data))
//       .on('end', () => {
//     });
})
console.log('data', data)
console.log('files:', files)

