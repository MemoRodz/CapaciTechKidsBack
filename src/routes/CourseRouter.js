const {Router} = require("express");
const getFalseApiToDB = require("../controllers/getFalseApiToDB");

const CourseRouter = Router();    

CourseRouter.get("/", async(req,res) => {
try{
   const result = await getFalseApiToDB()

    res.status(200).json(result)
        }
catch (error) {
    res.status(400).send(error.message)
        }
})


module.exports = CourseRouter;