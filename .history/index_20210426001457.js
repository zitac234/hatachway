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
      data['courses.csv'].forEach(course => includeObj[course.id] = true)
      let studentMark = data['marks.csv'].filter(mark => mark.student_id === studentId)
      let testIdArray = studentMark.map(mark => mark.test_id)
      let studentCourse = testIdArray.map(num => {
            let testIndx = num-1
      
            if(){
                  console.log('key', key)
                  let courseIndx = test.course_id - 1
                  includeObj[key] = false

                  return data['courses.csv'][courseIndx]
            }
      })
      console.log(includeObj)
      console.log(testIdArray)
      console.log(data)
     
}
getStudentCourse(2)



