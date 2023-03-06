const {tblCourses,tblUsers} = require("../DB_connection.js");
const categoriesXCourses = require("./postCategoriesXCourse.js");



const postCoursexStudent = async (user) => {


    try{
// primero verifique si existe esta relación, si no existe entonces que la incluya. 
  await tblUsersXCourses.create({
    tblCoursePKCourse: user.PK_Course,
    tblUserPKUser : user.PK_User
   }) 
}
    catch(error){
    return error
    }
}

module.exports = postCoursexStudent; 