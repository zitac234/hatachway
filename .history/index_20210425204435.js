const data = {}
const fs = require('fs').promise
const csv = require('csv-parser')
const  files = await fs.readdirSync('csvFiles')
files.forEach(file => data[file] = [])
(async function (){
      files.forEach(file =>{
            await fs.createReadStream(`csvFiles/${file}`)
            .pipe(csv())
            .on('data', (input) => data[file].push(input))
            .on('end', () => {
              console.log(data);
          });
      })
})()



