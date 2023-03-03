const {tblCourses,tblUsers,tblCategories} = require("../DB_connection.js");
// creo que no va a requerir courses ni categories
const getDetails = async (id) => {
    
    try{
   return tblUsers.findByPk(id,{
})
    }
    catch(error){
    throw error
    }
}

module.exports = getDetails; 