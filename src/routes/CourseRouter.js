const {Router} = require("express");
const {tblCourses,tblUsers,tblCategories, tblReviews} = require("../DB_connection.js");
const getDetails = require("../controllers/getDetailsCourse");
const postCourse = require("../controllers/postCourse.js");
const getCategory = require("../controllers/getCategory.js");




const CourseRouter = Router();    

CourseRouter.get("/", async(req,res) => {
    
try{
    const result = await tblCourses.findAll({
        where: {Active: true},
            include: [
                { model:tblUsers,
                
                },
                { model: tblCategories,
                  
                },
                {model: tblReviews,
                }
            ]
    });

    res.status(200).json(result)
        }
catch (error) {
    res.status(400).send(error.message)
        }
})
CourseRouter.get("/deleted", async(req,res) => {
    
try{
    const result = await tblCourses.findAll({
        where: {Active: false},
            include: [
                { model:tblUsers,
                
                },
                { model: tblCategories,
                  
                },
                {model: tblReviews,
                }
            ]
    });

    res.status(200).json(result)
        }
catch (error) {
    res.status(400).send(error.message)
        }
})


CourseRouter.get("/all", async(req,res) => {
    
try{
    const result = await tblCourses.findAll({
        
            include: [
                { model:tblUsers,
                
                },
                { model: tblCategories,
                  
                },
                {model: tblReviews,
                }
            ]
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

CourseRouter.put("/detail/:id/delete", async (req,res) =>{
    const {id} = req.params;
   
    try{
        const result = await tblCourses.update({ Active: false}, {where: {PK_Course: id}})
       
         res.status(200).json(result)
             }
     catch (error) {
         res.status(400).send(error.message)
             }
     })

CourseRouter.put("/detail/:id/activate", async (req,res) =>{
    const {id} = req.params;
   
    try{
        const result = await tblCourses.update({ Active: true}, {where: {PK_Course: id}})
       
         res.status(200).json(result)
             }
     catch (error) {
         res.status(400).send(error.message)
             }
     })

CourseRouter.post("/createCourse", async(req,res) => {
    const {Title,Description,Professor,Category,Duration,Active} = req.body;
   console.log(Title,Description,Professor,Category,Duration,Active)
   try{
    const result = await postCourse(Title,Description,Professor,Category,Duration,Active)
    
     res.status(201).json(result)
         }
 catch (error) {
    console.log(error.message)
     res.status(400).send(error.message)
         }
 })

 CourseRouter.get("/scores/:score", async(req,res)=>{
    const {score} = req.params;
try {
        const result = await tblCourses.findAll({
            attributes: ["Score"],
            where: {
                Score: score 
            }
        }) 
    res.status(200).send(result)
    }
    catch(error){
        res.status(400).send(error.message)
    }
})


module.exports = CourseRouter;

