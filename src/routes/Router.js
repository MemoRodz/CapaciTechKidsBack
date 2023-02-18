const {Router} = require("express");
const CategoriesRouter = require("./CategoriesRouter");
const CourseRouter = require("./CourseRouter");
const ReviewsRouter = require("./ReviewsRouter");
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
mainRouter.use("/users", UsersRouter)
mainRouter.use("/categories", CategoriesRouter)
mainRouter.use("/reviews", ReviewsRouter)

module.exports = mainRouter;