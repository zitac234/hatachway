const fs = require('fs')
const csv = require('csv-parser')
const  files = fs.readdirSync('csvFiles')
files.forEach(file => data[file] = [])
const getData =  (file, type) => {
      const data = []
      return new Promise((resolve, reject)=>{
            fs.createReadStream(`csvFiles/${file}`)
            .pipe(csv())
            .on('data', (input) => data.push(input))
            .on('end', () => {
             resolve();
          });
      })

      return data
}




