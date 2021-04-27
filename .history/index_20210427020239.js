const fs = require('fs')
const csv = require('csv-parser')
const fileData = async(file) => {
            const data = []
            return new Promise((resolve, reject)=>{
                  fs.createReadStream(`csvFiles/${file}`)
                  .on ('error', error => reject(error)).pipe(csv())
                  .on('data', (input) => data.push(input))
                  .on('end', () =>  resolve(data))
            })
      }
      const getData = async () =>{
            let data  = {}
            const  files = fs.readdirSync('csvFiles')
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

      const getStudentMark = async (studentId) =>{
            studentId = String(studentId)
            let  [data, includeObj ] = [await getData(), {}]
            data['courses.csv'].forEach(course => includeObj[course.id] = true)
            let studentMark = data['marks.csv'].filter(mark => mark.student_id === studentId)
            console.log('studentMark', studentMark)
            return studentMark
      }
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

            // console.log('data',data)
            //      return studentCourse

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
getStudentMark(2) 


