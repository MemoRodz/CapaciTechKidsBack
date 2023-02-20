const {Router} = require("express");
const getRelatedReviews = require("../controllers/getRelatedReviews.js");
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

ReviewsRouter.get("/related/:id", async (req,res) => {
  const {id} = req.params;

  try{
    const result = await getRelatedReviews(id)

    res.status(200).send(result)

  }
  catch (error) {
    res.status(400).send(error.message)
        }
})

module.exports = ReviewsRouter;
