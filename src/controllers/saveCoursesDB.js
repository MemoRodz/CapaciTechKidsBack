const {tblCourses,tblUsers} = require("../DB_connection.js");
const realDB = require("../utils/DBReal.js");
const categoriesXCourses = require("./postCategoriesXCourse.js");


const getFalseApiToDB = async() => {
 
try {

    await tblCourses.bulkCreate(realDB)

    const allCourses = await tblCourses.findAll()
   for (let i = 0; i < allCourses.length; i++) {
        categoriesXCourses(allCourses[i].PK_Course, realDB[i].Category)}

        
    
  
    }
    catch(error){
        return error.message
    }
}

module.exports = getFalseApiToDB;
