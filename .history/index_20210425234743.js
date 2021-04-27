const fs = require('fs')
const csv = require('csv-parser')
const  files = fs.readdirSync('csvFiles')
const fileData =  (file) => {
      const data = []
      return new Promise((resolve, reject)=>{
            fs.createReadStream(`csvFiles/${file}`)
            .on ('error', error => reject(error)).pipe(csv())
            .on('data', (input) => data.push(input))
            .on('end', () =>  resolve(data))
      })
}
async function getData (){
      let data = {}
      files.forEach(file => data[file] = [])
      try{
            for(let i = 0;  i < files.length; i++){
                  let file = files[i]
                  data[file] = await fileData(file)
            }
      }catch{
            return 'There is an error in processing this file! '
      }
      return data
}
const getStudentCourse = async (studentId)=>{
      studentId = String(studentId)
      let includeObj = {}
      let data = await getData()
      let studentMark = data['marks.csv'].filter(mark => mark.student_id === studentId)
      let testIdArray = studentMark.map(mark => mark.test_id)
      testIdArray.forEach(num => includeObj[num] = true)
      // let studentCourse = data['tests.csv'].map(test => {
      //       if(includeObj[id] )
      // })
      console.log(data['courses.csv'][0])
      console.log(includeObj)
}
getStudentCourse(1)



