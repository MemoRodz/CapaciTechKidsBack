const {Router} = require("express");
const {tblCourses,tblUsers,tblCatXCourses} = require("../DB_connection.js");
const getDetails = require("../controllers/getDetailsCourse")



const CourseRouter = Router();    

CourseRouter.get("/", async(req,res) => {
    
try{
    const result = await tblCourses.findAll({
        include: tblUsers
    });
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
        console.log(result,"!!!!")
         res.status(200).json(result)
             }
     catch (error) {
         res.status(400).send(error.message)
             }
     })





module.exports = CourseRouter;

