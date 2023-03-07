const {tblCourses,tblUsers,tblLectures} = require("../DB_connection.js");
const categoriesXCourses = require("./postCategoriesXCourse.js");
const postCoursexStudent = require("./postCoursexStudent.js");




const postCourse = async (Title,Description,Professor,Category,Duration,Active,Image,Videos) => {
    const PK_User = Professor

    try{

  await tblCourses.create({
        Title,
        Description,
        PK_User,
        Duration,
        Active,
        Category,
        Image
    }
    )

   const last = await tblCourses.findAll()

  await categoriesXCourses(last.length,Category)
  let c = 1
  for (const data of Videos) {
          await tblLectures.create({
            Title: data.titulo,
            Description: data.descripcion,
            PK_Courses: last.length,
            Video : data.video,
            NoVideo : c
          });
          c++
        }
  postCoursexStudent(last.length,PK_User) 

}
    catch(error){
    return error
    }
}

module.exports = postCourse; 