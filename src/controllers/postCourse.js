const {tblCourses,tblUsers,tblLectures} = require("../DB_connection.js");
const categoriesXCourses = require("./postCategoriesXCourse.js");
const postCoursexStudent = require("./postCoursexStudent.js");




const postCourse = async (Title,Description,Professor,Category,Duration,Active,Image,Videos) => {
    const PK_User = Professor

    try{

      const last = await tblCourses.create({
        Title,
        Description,
        PK_User,
        Duration,
        Image
});

  await categoriesXCourses(last.PK_Course,Category)
  let c = 1
  for (const data of Videos) {
          await tblLectures.create({
            Title: data.titulo,
            Description: data.descripcion,
            PK_Courses: last.PK_Course,
            Video : data.video,
            NoVideo : c
          });
          c++
        }
  postCoursexStudent(last.PK_Course ,PK_User) 

}
    catch(error){
    return error
    }
}

module.exports = postCourse; 