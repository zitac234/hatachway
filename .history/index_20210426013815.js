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
 function getData (){
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
// const getStudentCourse = async (studentId)=>{
//       studentId = String(studentId)
//       let includeObj = {}
//       let studentCourse = []
//       let data = await getData()
//       data['courses.csv'].forEach(course => includeObj[course.id] = true)
//       let studentMark = data['marks.csv'].filter(mark => mark.student_id === studentId)
//       let testIdArray = studentMark.map(mark => mark.test_id)
//       testIdArray.forEach(num => {
//             let testIndx = num-1
//             let testObj = data['tests.csv'][testIndx]
//             let courseId = testObj['course_id']
//             if(includeObj[courseId]){
//                   let courseIndx = courseId - 1
//                   includeObj[courseId] = false
//                   studentCourse.push (data['courses.csv'][courseIndx])
//             }
//       })
//      return studentCourse
// }
// const getCourseScore = (studentId) =>{
//       let studentCourses = getStudentCourse(studentId)
//       return studentCourses
// }
// getCourseScore (2) 


