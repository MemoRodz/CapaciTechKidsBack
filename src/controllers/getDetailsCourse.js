const {tblCourses,tblUsers,tblCategories} = require("../DB_connection.js");



const getDetails = async (id) => {
    try{
   return tblCourses.findByPk(id,{
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