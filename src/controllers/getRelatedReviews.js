const {tblCourses,tblUsers,tblCategories,tblReviews} = require("../DB_connection.js");



const getRelatedReviews = async (id) => {
    try{
   return tblReviews.findAll({
    where : { 
        PK_Course : id

    }
   })}

    catch(error){
    throw error
    }
}

module.exports = getRelatedReviews; 