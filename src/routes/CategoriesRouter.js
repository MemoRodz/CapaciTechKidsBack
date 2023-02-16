const {Router} = require("express");
const {tblCourses,tblUsers,tblCategories} = require("../DB_connection.js");


const CategoriesRouter = Router();    

CategoriesRouter.get("/", async(req,res) => {
try{
   const result = await tblCategories.findAll()
    res.status(200).json(result)
        }
catch (error) {
    res.status(400).send(error.message)
        }
})

module.exports = CategoriesRouter;