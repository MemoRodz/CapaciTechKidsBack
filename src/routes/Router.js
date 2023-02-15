const {Router} = require("express");
const CourseRouter = require("./CourseRouter");
const UsersRouter = require("./UsersRoutes");


const mainRouter = Router();    

mainRouter.get("/", (req,res) => {
try {
    res.status(200).send("estamos en CAPACITECHKIDS")
}
catch(error){
    res.status(400).send(error.message)
}
})

mainRouter.use("/courses", CourseRouter)
// mainRouter.use("/users", UsersRouter)

module.exports = mainRouter;