const {Router} = require("express");
const {tblCourses,tblUsers,tblReviews} = require("../DB_connection.js");


const ReviewsRouter = Router();    

ReviewsRouter.get("/", async(req,res) => {
    
try{
    const result = await tblReviews.findAll({
  include: [
    { 
      model: tblUsers,
      attributes: ["Name"]
    },
    { 
      model: tblCourses,
      attributes: ["Title"]
    }
  ]
});

    res.status(200).json(result)
        }
catch (error) {
    res.status(400).send(error.message)
        }
})

const getScore = async(req,res) => {
    //ruta por crear
}

module.exports = ReviewsRouter;
