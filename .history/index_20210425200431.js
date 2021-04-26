const data = {}s
const fs = require('fs')
const csv = require('csv-parser')
const  files = fs.readdirSync('csvFiles')
files.forEach(file => data[file] = [])
// files.forEach(file =>{
//       fs.createReadStream('csvFiles/courses.csv')
//       .pipe(csv())
//       .on('data', (data) => results.push(data))
//       .on('end', () => {
//         console.log(results);
//     });
// })
console.log('data', data)
console.log('files:', files)

