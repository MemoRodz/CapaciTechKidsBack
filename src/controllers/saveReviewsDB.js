const {tblReviews} = require("../DB_connection.js");
const falseReviews = require("../utils/falseApiReviews")

const saveReviewsDB = async() => {
    console.log(falseReviews)
    try {

  for (const data of falseReviews) {  
   await tblReviews.create({
        Score : data.Score,
        Comment : data.Comment,
        Creation_Date : data.Creation_Date,
        PK_Course: data.PK_Course,
        PK_User : data.PK_User,
    })}

    }
    catch(error){
        return error.message
    }
}

module.exports = saveReviewsDB;