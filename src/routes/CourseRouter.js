const {Router} = require("express");
const {tblCourses,tblUsers} = require("../DB_connection.js");
const getDetails = require("../controllers/getDetailsCourse");
const postCourse = require("../controllers/postCourse.js");



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
       
         res.status(200).json(result)
             }
     catch (error) {
         res.status(400).send(error.message)
             }
     })

CourseRouter.post("/createPost", async(req,res) => {
    const {Title,Description,Start_Date,End_Date,Professor,Category,Image,Duration,Active,Score} = req.body;
   console.log(Title,Description,Start_Date,End_Date,Professor,Category,Image,Duration,Active,Score)
   try{
    const result = await postCourse(Title,Description,Start_Date,End_Date,Professor,Category,Image,Duration,Active,Score)
    
     res.status(201).json(result)
         }
 catch (error) {
     res.status(400).send(error.message)
         }
 })


module.exports = CourseRouter;

