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
      console.log('data', data)
      console.log('studentMark', studentMark)
      return studentMark
}
const  getStudentCourse = async (studentId) => {
      let [courseIdObj, studentCourses] = [{}, []]
      let [studentMark, data] =  [await getStudentMark (studentId), await getData()]
      let testId = studentMark.map(obj => obj.test_id)
      data['courses.csv'].map(obj => courseIdObj[obj.id] = true)
      testId.forEach(num =>{
            let testIndx = num-1
            let testObj  = data['tests.csv'][testIndx]
            let courseId =  testObj['course_id']
            if(courseIdObj[courseId]){
                  let courseIndx = courseId - 1
                  courseIdObj[courseId] = false
                  studentCourses.push (data['courses.csv'][courseIndx])
            }
      })
      // console.log('testId', testId)
      // console.log('studentCourses',studentCourses)
      return studentCourses
}

const getCourseAverage = async (studentId) => {
      let getStudentCourses = await getStudentCourse(studentId) 
      let [studentMark, data, gradeObj] = [await getStudentMark (studentId), await getData(), {}]
      studentMark.forEach(obj => {
            let testIndx = obj.test_id - 1
            let weight = ((data['tests.csv'][testIndx]['weight'])/100)
            let courseId = data['tests.csv'][testIndx]['course_id']
            let rawGrade = (weight*obj.mark).toFixed(2)
            if(gradeObj[courseId]){
                  gradeObj[courseId].push(rawGrade)
            }else{
                  gradeObj[courseId] = [rawGrade]
            }
      })
      for(let key in gradeObj){
            let value = gradeObj[key]
            let result = value.reduce((acc, val)=> {
                  acc  + val
            },0)
            getStudentCourses.forEach(obj => {
                  if(key === obj['id'])obj.courseAverage = result
            })
      }
      console.log('studentCourses', getStudentCourses)
      console.log(gradeObj)
}
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
getCourseAverage(2)


