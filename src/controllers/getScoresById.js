const { Sequelize } = require("sequelize");
const {tblCourses,tblUsers,tblCategories, tblReviews, sequelize} = require("../DB_connection.js");
// const tblReviews = require("../models/tblReviews.js");



const getScores = async (id) => {
    try{
   return tblCourses.findByPk(id,{   // Fuuncion en construcción 
    
    include: [
        { model: tblReviews,
            attributes: [
                [
                    
                  Sequelize.fn("AVG", Sequelize.col("tblReviews.Score")),
                  "average_score",
                ],
              ],
        },

    ],
    group: ["tblCourses.PK_Course", "tblReviews.PK_Review"],
})
    }
    catch(error){
    throw error
    }
}

module.exports = getScores; 