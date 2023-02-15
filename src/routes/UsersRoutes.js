const {Router} = require("express");
const getFalseApiToDBUsers = require("../controllers/getFalseApitoDBUsers");


const UsersRouter = Router();    

UsersRouter.get("/", async(req,res) => {
try{
   const result = await getFalseApiToDBUsers()

    res.status(200).json(result)
        }
catch (error) {
    res.status(400).send(error.message)
        }
})



module.exports = UsersRouter;