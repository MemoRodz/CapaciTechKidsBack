const {tblReviews,tblCourses} = require("../DB_connection.js");
const falseReviews = require("../utils/falseApiReviews")

const saveReviewsDB = async() => {

    try {

  for (const data of falseReviews) { 
    console.log(data) 
   await tblReviews.create({
        Score : data.Score,
        Comment : data.Comment,
        Creation_Date : data.Creation_Date,
        PK_Course: data.PK_Course,
        PK_User : data.PK_User,
    })

    const miCurso = await tblCourses.findByPk(data.PK_Course, {
        include : {
            model : tblReviews
        }
  })
 let suma = 0
 let prom = 0
  miCurso.tblReviews.forEach(rev => {
    suma = suma + rev.Score;
    prom = prom + 1;
  
  })
  
  
    const scoree = suma / prom
    miCurso.Score = scoree;

    miCurso.save()                                 // Volverás a este curso cuando estés creando el form de Review. Usa este código para cada post, el código
                                                // actualiza el score cada vez que alguien postee un nuevo review. 
    };

    }
    catch(error){
        return error.message
    }
}

module.exports = saveReviewsDB;