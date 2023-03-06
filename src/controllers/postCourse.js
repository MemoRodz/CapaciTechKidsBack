const {tblCourses,tblUsers} = require("../DB_connection.js");
const categoriesXCourses = require("./postCategoriesXCourse.js");



const postCourse = async (Title,Description,Professor,Category,Duration,Active,Image) => {
    const PK_User = Professor

    try{

  await tblCourses.create({
        Title,
        Description,
        PK_User,
        Duration,
        Active,
        Category,
        Image
    }
    )

   const last = await tblCourses.findAll()

  await categoriesXCourses(last.length,Category)

}
    catch(error){
    return error
    }
}

module.exports = postCourse; 