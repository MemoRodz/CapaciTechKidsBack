const {tblCourses,tblUsers} = require("../DB_connection.js");
const falseApi = require("../utils/falseApiCourses");
const categoriesXCourses = require("./postCategoriesXCourse.js");

const getFalseApiToDB = async() => {
    try {
 let categorias = []
 const mapeados = []
 for (let i = 0; i < falseApi.length; i++) {
    let courseArray = {};
    courseArray.Title = falseApi[i].Title;
    courseArray.Description = falseApi[i].Description;
    courseArray.Category = falseApi[i].Category;
    courseArray.Start_Date = falseApi[i].Start_Date;
    courseArray.End_Date = falseApi[i].End_Date;
    courseArray.Image = falseApi[i].Image;
    courseArray.Duration = falseApi[i].Duration;
    courseArray.Profesores = falseApi[i].Instructor;
    mapeados.push(courseArray);
  }


  for (const data of mapeados) { 
    
    categorias.push(data.Category)
   await tblCourses.create({
        Title : data.Title,
        Description : data.Description,
        Start_Date: data.Start_Date,
        End_Date : data.End_Date,
        Image : data.Image,
        Duration : data.Duration,
        PK_User : data.Profesores,
        Score : data.Score
    })}

    const allCourses = await tblCourses.findAll()
   for (let i = 0; i < allCourses.length; i++) {
        categoriesXCourses(allCourses[i].PK_Course, categorias[i])}
    
   const result =  tblCourses.findAll({
    include: tblUsers //preguntar a chat como agregar otro include con tblCategories
})
   return result
    }
    catch(error){
        return error.message
    }
}

module.exports = getFalseApiToDB;



/* [{Title: string,
Description : string,
Category : ENUM 'Design',
                'Development',
                'Business',
                'Marketing',
                'Other ,
Start_Date : Dateonly(fechas),
End_Date: Dateonly(fechas),
Image: string,
Duration: integer
}]*/ 