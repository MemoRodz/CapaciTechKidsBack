const {tblCourses,tblUsers,tblUsersXCourses} = require("../DB_connection.js");
const realDB = require("../utils/DBReal.js");
const categoriesXCourses = require("./postCategoriesXCourse.js");


const getFalseApiToDB = async() => {
 
try {

    await tblCourses.bulkCreate(realDB)
  
    }
    catch(error){
        return error.message
    }
}

module.exports = getFalseApiToDB;
