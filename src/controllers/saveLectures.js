const {tblCourses,tblUsers,tblLectures} = require("../DB_connection.js");
const  lectures = require("../utils/DBLectures.js");
const categoriesXCourses = require("./postCategoriesXCourse.js");


const saveLectures = async () => {
    try {
      for (const data of lectures) {
  const extraerVideo = Object.entries(data)[1];

  const numero = parseInt(extraerVideo[0].slice(5,extraerVideo[0].length))
        await tblLectures.create({
          Title: data.titulo,
          Description: data.descripcion,
          PK_Courses: data.id,
          Video : extraerVideo[1],
          NoVideo : numero
        });
      }
    } catch (error) {
      return error.message;
    }
  };

module.exports = saveLectures;