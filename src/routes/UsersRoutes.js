const {Router} = require("express");
const {tblCourses,tblUsers} = require("../DB_connection.js");
const register = require("../controllers/registerUser.js")
const UsersRouter = Router();    
const getUserDetails = require("../controllers/getUserDetails")

UsersRouter.get("/", async(req,res) => {
try{
   const result = await tblUsers.findAll()
    res.status(200).json(result)
        }
catch (error) {
    res.status(400).send(error.message)
        }   
})

UsersRouter.get("/:id", async(req,res) => {
    const {id} = req.params;
    try{
        const result = await getUserDetails(id)
        res.status(200).json(result)
             }
     catch (error) {
        res.status(400).send(error.message)
             }
     })

UsersRouter.get("/:id/delete", async(req,res) => {
    const {id} = req.params;
    try{
        const result = await tblUsers.update({Active: false}, {where: {PK_User: id}})
        res.status(200).json(result)
             }
     catch (error) {
        res.status(400).send(error.message)
             }
     })

UsersRouter.get("/:id/activate", async(req,res) => {
    const {id} = req.params;
    try{
        const result = await tblUsers.update({Active: true}, {where: {PK_User: id}})
        res.status(200).json(result)
             }
     catch (error) {
        res.status(400).send(error.message)
             }
     })

UsersRouter.get("/instructors", async(req,res) => {
    try {
        const result = await tblUsers.findAll({
            attributes: ["PK_User","Name"],
            where: {
                UserType: "Instructor" 
            }
        }) 
    res.status(200).send(result)
    }
    catch(error){
        res.status(400).send(error.message)
    }
})

UsersRouter.post("/registro", async(req,res) => {
    const user = req.body;
  
    try {
        const resp = await register(user)
     res.status(200).send(resp)
    }
    catch(error){
        res.status(200).send(error.message)
    }
} )

UsersRouter.get("/advusers", async(req,res) => {
    try {
        const result = await tblUsers.findAll({
            attributes: ["PK_User","Name"],
            where: {
                UserType: "AdvUser" 
            }
        }) 
    res.status(200).send(result)
    }
    catch(error){
        res.status(400).send(error.message)
    }
})

UsersRouter.get("/students", async(req,res) => {
    try {
        const result = await tblUsers.findAll({
            attributes: ["PK_User","Name"],
            where: {
                UserType: "Student" 
            }
        }) 
    res.status(200).send(result)
    }
    catch(error){
        res.status(400).send(error.message)
    }
})
UsersRouter.get("/bannedusers", async(req,res) => {
    try {
        const result = await tblUsers.findAll({
            attributes: ["PK_User","Name", "Active", "Email", "Register_Date"],
            where: {
                Active: false 
            }
        }) 
    res.status(200).send(result)
    }
    catch(error){
        res.status(400).send(error.message)
    }
})


module.exports = UsersRouter;