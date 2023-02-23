const {tblCourses,tblUsers} = require("../DB_connection.js");
const realDB = require("../utils/DBReal.js");
const categoriesXCourses = require("./postCategoriesXCourse.js");


const getFalseApiToDB = async() => {
 
try {

    await tblCourses.bulkCreate(realDB)

    const allCourses = await tblCourses.findAll()
   for (let i = 0; i < allCourses.length; i++) {
        categoriesXCourses(allCourses[i].PK_Course, realDB[i].Category)}
    
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