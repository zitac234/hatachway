const data = {}
const fs = require('fs')
const csv = require('csv-parser')
const  files = fs.readdirSync('csvFiles')
files.forEach(file => data[file] = [])
files.forEach(file =>{
      fs.createReadStream(`csvFiles/${file}`)
      .pipe(csv())
      .on('data', (data) => data[`${}`].push(data))
      .on('end', () => {
        console.log(results);
    });
})
console.log('data', data)
console.log('files:', files)

