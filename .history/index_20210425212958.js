const fs = require('fs')
const csv = require('csv-parser')
const  files = fs.readdirSync('csvFiles')
const fileData =  (file, type) => {
      const data = []
      return new Promise((resolve, reject)=>{
            fs.createReadStream(`csvFiles/${file}`)
            .on ('error', error =>{
                  reject(error)
            })
            .pipe(csv())
            .on('data', (input) => data.push(input))
            .on('end', () => {
             resolve(data);
          });
      })
}
async function getData (){
      let data = {}
      files.forEach(file => data[file] = [])
      try{
            files.forEach(file =>{
                  data[file] = 
            })
      }
}




