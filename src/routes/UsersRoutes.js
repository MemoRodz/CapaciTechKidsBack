const {Router} = require("express");
const {tblCourses,tblUsers} = require("../DB_connection.js");


const UsersRouter = Router();    

UsersRouter.get("/", async(req,res) => {
try{
   const result = await tblUsers.findAll()
    res.status(200).json(result)
        }
catch (error) {
    res.status(400).send(error.message)
        }
})



module.exports = UsersRouter;