const {Router} = require("express");
const getDetails = require("../controllers/getDetailsCourse");
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

CourseRouter.get("/detail/:id", async (req,res) =>{
    const {id} = req.params;
   
    try{
        const result = await getDetails(id)
        console.log(result)
         res.status(200).json(result)
             }
     catch (error) {
         res.status(400).send(error.message)
             }
     })


module.exports = CourseRouter;

