const {tblCourses,tblUsers} = require("../DB_connection.js");
const falseApi = require("../utils/falseApi")

const getFalseApiToDB = async() => {
    try {
       let id = 0 
 const mapeados = []
 for (let i = 0; i < falseApi.length-1; i++) {
    let courseArray = {};
    courseArray.Title = falseApi[i].Title;
    courseArray.Description = falseApi[i].Description;
    courseArray.Category = falseApi[i].Category;
    courseArray.Start_Date = falseApi[i].Start_Date;
    courseArray.End_Date = falseApi[i].End_Date;
    courseArray.Image = falseApi[i].Image;
    courseArray.Duration = falseApi[i].Duration;
    courseArray.Profesores = falseApi[i].Instructor;
    courseArray.Score = falseApi[i].Score
    console.log(falseApi[i].FK_Users)
    mapeados.push(courseArray);
  }


  for (const data of mapeados) {  
   await tblCourses.create({
        Title : data.Title,
        Description : data.Description,
        Category : data.Category,
        Start_Date: data.Start_Date,
        End_Date : data.End_Date,
        Image : data.Image,
        Duration : data.Duration,
        PK_Users : data.Profesores,
        Score : data.Score
    })}
    
   const result =  tblCourses.findAll({
    include: tblUsers
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