const {tblReviews} = require("../DB_connection.js");
// const categoriesXCourses = require("./postCategoriesXCourse.js");



const postReview = async (Score, Comment, PK_Course, PK_User) => {
    // const PK_User = Professor

    try{

  await tblReviews.create({
        Score,
        Comment,
        PK_User,
        PK_Course
    }
    )

   const last = await tblReviews.findAll()

//   await categoriesXReviews(last.length,Category)

}
    catch(error){
    return error
    }
}

module.exports = postReview; 