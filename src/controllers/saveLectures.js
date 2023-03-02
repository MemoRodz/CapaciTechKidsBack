const {tblCourses,tblUsers,tblLectures} = require("../DB_connection.js");
const  lectures = require("../utils/DBLectures.js");
const categoriesXCourses = require("./postCategoriesXCourse.js");


const saveLectures = async () => {
    try {
      for (const data of lectures) {
  const extraerVideo = Object.entries(data)[1];
   console.log(data.id,data.descripcion)
        await tblLectures.create({
          Title: data.titulo,
          Description: data.descripcion,
          PK_Courses: data.id,
          Video : extraerVideo[1],
          NoVideo : extraerVideo[0]
        });
      }
    } catch (error) {
      return error.message;
    }
  };

module.exports = saveLectures;