const fs = require('fs')
const csv = require('csv-parser')

class FileConveter{
      async constructor(){
            this.data = 
            this.getData ()
       }
      
      getStudentCourse (studentId){
            console.log(this.data)
            // studentId = String(studentId)
            // let [includeObj , studentCourse]= [{}, []]
            // this.data['courses.csv'].forEach(course => includeObj[course.id] = true)
            // let studentMark = data['marks.csv'].filter(mark => mark.student_id === studentId)
            // let testIdArray = studentMark.map(mark => mark.test_id)
            // testIdArray.forEach(num => {
            //       let testIndx = num-1
            //       let testObj = this.data['tests.csv'][testIndx]
            //       let courseId = testObj['course_id']
            //       if(includeObj[courseId]){
            //             let courseIndx = courseId - 1
            //             includeObj[courseId] = false
            //             studentCourse.push (data['courses.csv'][courseIndx])
            //       }
            // })
            // console.log('studentMark',studentMark)
      //       console.log('data',data)
      //      return studentCourse
      }
}
let example = new FileConveter ()
example.getStudentCourse(2)



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

