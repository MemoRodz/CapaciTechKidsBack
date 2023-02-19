const {tblCourses,tblUsers} = require("../DB_connection.js");
const categoriesXCourses = require("./postCategoriesXCourse.js");



const postCourse = async (Title,Description,Start_Date,End_Date,Professor,Category,Image,Duration,Active,Score) => {
    const PK_User = Professor

    try{

  await tblCourses.create({
        Title,
        Description,
        Start_Date,
        End_Date,
        PK_User,
        Score,
        Image,
        Duration,
        Active,
        Category 
    }
    )

   const last = await tblCourses.findAll()

  await categoriesXCourses(last.length,Category)

  return tblCourses.findByPk(last.length)


}
    catch(error){
    throw error
    }
}

module.exports = postCourse; 