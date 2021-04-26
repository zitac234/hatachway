const data = {}
const fs = require('fs').promises
const csv = require('csv-parser')
const  files = fs.readdirSync('csvFiles')
files.forEach(file => data[file] = [])
(async function (){

})()
console.log('data', data)
// console.log('files:', files)

