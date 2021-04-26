const fs = require('fs')
const csv = require('csv-parser')
const  files = fs.readdirSync('csvFiles')
files.forEach(file => data[file] = [])
const getData =  (file, type) => {
      const data = {}
            return new fs.createReadStream(`csvFiles/${file}`)
            .pipe(csv())
            .on('data', (input) => data[file].push(input))
            .on('end', () => {
             console.log('data' ,data);
          });

      return data
}




