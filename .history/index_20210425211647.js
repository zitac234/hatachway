const fs = require('fs')
const csv = require('csv-parser')

const getData =  () => {
      const data = {}
      const  files = fs.readdirSync('csvFiles')
      files.forEach(file => data[file] = [])
      files.forEach(file =>{
            fs.createReadStream(`csvFiles/${file}`)
            .pipe(csv())
            .on('data', (input) => data[file].push(input))
            .on('end', () => {
             console.log('data' ,data);
          });
      })
      return data
}




