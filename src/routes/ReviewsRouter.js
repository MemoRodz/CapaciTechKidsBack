const {Router} = require("express");
const {tblCourses,tblUsers,tblReviews} = require("../DB_connection.js");


const ReviewsRouter = Router();    

ReviewsRouter.get("/", async(req,res) => {
    
try{
    const result = await tblReviews.findAll()

    res.status(200).json(result)
        }
catch (error) {
    res.status(400).send(error.message)
        }
})

module.exports = ReviewsRouter;
