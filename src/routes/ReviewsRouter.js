const {Router} = require("express");
const getRelatedReviews = require("../controllers/getRelatedReviews.js");
const {tblCourses,tblUsers,tblReviews} = require("../DB_connection.js");
const postReview = require("../controllers/postReview.js")
const getScores = require("../controllers/getScoresById.js")

const ReviewsRouter = Router();    

ReviewsRouter.get("/", async(req,res) => {
    
try{
    const result = await tblReviews.findAll({
  include: [
    { 
      model: tblUsers,
      attributes: ["Email"]
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



ReviewsRouter.post("/", async (req, res) => { 
  const { Score, Comment, PK_Course, PK_User } = req.body;
  console.log(Score, Comment, PK_Course, PK_User )

try {
  const result = await postReview(Score, Comment, PK_Course, PK_User );
  console.log(result)
  res.status(201).json(result);
}
catch (error) {
  console.log(error.message);
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


ReviewsRouter.get("/avg/related/:id", async (req, res) => {
  const {id} = req.params;
  try {
    const result = await getScores(id)
    res.status(200).send(result)
  }
  catch (error) {
    res.status(400).send(error.message)
        }
})



module.exports = ReviewsRouter;