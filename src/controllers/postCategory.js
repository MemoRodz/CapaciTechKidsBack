const {tblCategories,tblCourses} = require("../DB_connection.js");
const falseCategories = require("../utils/falseCategories.js");




const postCourse = async (Name) => {

   

    try{
    return tblCategories.create({
        Name
    }
    )}
    catch(error){
    throw error
    }
}

const postFalseCourses = async() => {
    falseCategories.forEach(cat => {
        postCourse(cat);
    
    })
  
}

module.exports = {postCourse,postFalseCourses}; 