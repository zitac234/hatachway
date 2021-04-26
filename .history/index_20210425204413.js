const data = {}
const fs = require('fs').promise
const csv = require('csv-parser')
const  files = await fs.readdirSync('csvFiles')
files.forEach(file => data[file] = [])
(async function)



