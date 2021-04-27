const fs = require('fs')
const csv = require('csv-parser')
class FileConveter{
      constructor(){
            this.data = {}
       }
      fileData =  (file) => {
            const data = []
            return new Promise((resolve, reject)=>{
                  fs.createReadStream(`csvFiles/${file}`)
                  .on ('error', error => reject(error)).pipe(csv())
                  .on('data', (input) => data.push(input))
                  .on('end', () =>  resolve(data))
            })
      }
      async getData (){
            let info = {}
            const  files = fs.readdirSync('csvFiles')
            files.forEach(file => info[file] = [])
            try{
                  for(let i = 0;  i < files.length; i++){
                        let file = files[i]
                        info[file] = await this.fileData(file)
                  }
            }catch{
                  return 'There is an error in processing this file! '
            }
            this.data = info
      }
      getStudentCourse = async (studentId)=>{
            studentId = String(studentId)
            let includeObj = {}
            let studentCourse = []
            let data = await getData()
            data['courses.csv'].forEach(course => includeObj[course.id] = true)
            let studentMark = data['marks.csv'].filter(mark => mark.student_id === studentId)
            let testIdArray = studentMark.map(mark => mark.test_id)
            testIdArray.forEach(num => {
                  let testIndx = num-1
                  let testObj = data['tests.csv'][testIndx]
                  let courseId = testObj['course_id']
                  if(includeObj[courseId]){
                        let courseIndx = courseId - 1
                        includeObj[courseId] = false
                        studentCourse.push (data['courses.csv'][courseIndx])
                  }
            })
            console.log('studentMark',studentMark)
            console.log('data',data)
           return studentCourse
      }
}
let example = new FileConveter ()
example.getData()



// const getCourseScore = async (studentId) =>{
//       let data = await getData()
//       let courseWeight = {}
//       let studentCourses = await getStudentCourse(studentId)
//       studentCourses.forEach( course => courseWeight[course.id] = [])
//        data['tests.csv'].forEach(obj =>{
//             let key = obj.course_id
//             if(courseWeight[key])courseWeight[key].push([obj.id, obj.weight/100])
//       })
//       let studentMark = data['marks.csv'].filter(mark => mark.student_id === studentId)
//       for(let key in courseWeight ){
//             let value = courseWeight[key]
//             studentMark.forEach(obj =>{
//                   let id = obj.test_id
//             })
//       }
//       console.group('courseWeight',courseWeight)
//       console.log('studentCourses',studentCourses)
// }
// getCourseScore (2) 


