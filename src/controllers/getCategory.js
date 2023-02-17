const {tblCourses,tblUsers,tblCatXCourses,tblCategories} = require("../DB_connection.js");



const getCategory = async (Category) => {
    console.log(Category)
    try{
    const filtered =  await tblCategories.findOne( 
            { attribute: "PK_Category", 
                where: {
                    Name: Category} 
                })
       console.log(filtered)

      const courses = await tblCatXCourses.findAll({
        attribute: "tblCoursePKCourse",
            where: {
                tblCategoryPKCategory : filtered.PK_Category
            }
 
})
    console.log(courses)
    return courses.map(course => course.tblCoursePKCourse)
}

catch(error){
          return error.message;
        
        }}

module.exports = getCategory; 