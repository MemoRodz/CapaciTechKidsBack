const {tblCourses,tblUsers,tblCatXCourses,tblCategories} = require("../DB_connection.js");



const getCategory = async (id) => {
    
    try{
        const {tblCategoryPKCategory} =  await tblCatXCourses.findOne({
    
                    where: {
                        tblCoursePKCourse: id} 
        })

             return   tblCourses.findAll({
                    include: [ {
                        model: tblUsers
                    },
                      {model: tblCategories,
                      where: {
                        PK_Category : tblCategoryPKCategory
                      }}
                    ]
 
})
    
    return courses  
}

catch(error){
          return error.message;
        
        }}

module.exports = getCategory; 