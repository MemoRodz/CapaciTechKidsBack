const { Sequelize } = require("sequelize");
const {tblCourses,tblUsers,tblCategories, tblReviews, sequelize} = require("../DB_connection.js");
// const tblReviews = require("../models/tblReviews.js");



const getScores = async (id) => {
    try{
   return tblCourses.findByPk(id, {
    attributes: [
        [
            Sequelize.fn("AVG", Sequelize.col("tblReviews.Score")),
            "average_score",
        ],
    ],
    include: [
        {
            model: tblReviews,
            attributes: [],
        },
    ],
    group: ["tblCourses.PK_Course"],
})
    }
    catch(error){
    throw error
    }
}

module.exports = getScores; 