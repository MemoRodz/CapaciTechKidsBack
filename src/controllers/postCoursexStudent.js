const {tblCourses,tblUsers, tblUsersXCourses} = require("../DB_connection.js");



const postCoursexStudent = async (course,student) => {
  

    try{
// primero verifique si existe esta relación, si no existe entonces que la incluya. 
  await tblUsersXCourses.create({
    tblCoursePKCourse: course,
    tblUserPKUser : student
   }) 
}
    catch(error){
    return error
    }
}

module.exports = postCoursexStudent; 