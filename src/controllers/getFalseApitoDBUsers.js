const {tblUsers} = require("../DB_connection.js");
const falseApi = require("../utils/falseApi")

const getFalseApiToDBUsers = async() => {
    try {
 const mapeados = []
 for (let i = 0; i < 4; i++) {
    let courseArray = {};
    courseArray.Title = falseApiUsers[i].Title;
    courseArray.Description = falseApiUsers[i].Description;
    courseArray.Category = falseApiUsers[i].Category;
    courseArray.Start_Date = falseApiUsers[i].Start_Date;
    courseArray.End_Date = falseApiUsers[i].End_Date;
    courseArray.Image = falseApiUsers[i].Image;
    courseArray.Duration = falseApiUsers[i].Duration;
    mapeados.push(courseArray);
  }
  console.log(mapeados)

  for (const data of mapeados) {  
   await tblUsers.create({
        Title : data.Title,
        Description : data.Description,
        Category : data.Category,
        Start_Date: data.Start_Date,
        End_Date : data.End_Date,
        Image : data.Image,
        Duration : data.Duration,
    })}

    return tblCourses.findAll()
    }
    catch(error){
        return error.message
    }
}

module.exports = getFalseApiToDBUsers;