const {tblCourses,tblUsers,tblCategories,tblReviews} = require("../DB_connection.js");



const getRelatedReviews = async (id) => {
    try{
   return tblReviews.findAll({
    where : { 
        PK_Course : id
    },
    include: [
        { model:tblUsers,
         attributes : ["Name"]
        
        }]
   })}

    catch(error){
    throw error
    }
}

module.exports = getRelatedReviews; 