const {tblCourses,tblUsers,tblCategories} = require("../DB_connection.js");



const getScores = async (id) => {
    try{
   return tblCourses.findByPk(id,{   // Fuuncion en construcción 
    include: [
        { model:tblUsers,
        
        },
        { model: tblCategories,
          
        },
    ]})
    }
    catch(error){
    throw error
    }
}

module.exports = getDetails; 