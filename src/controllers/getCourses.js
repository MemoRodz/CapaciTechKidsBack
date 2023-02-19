const {tblCourses,tblUsers,tblCatXCourses,tblCategories} = require("../DB_connection.js");



const getCourses = async () => {
    
    try{
    const allCourses = await tblCourses.findAll({
        
        include: [
            { model:tblUsers,
            
            },
            { model: tblCategories,
              
            },
            {
              model :tblReviews,
              attributes: ["Score"]
            }
        ]
}) 
    let id = 0 
    const sumatoria = allCourses.map(course => {
      let suma =  course.tblReviews.reduce((a,b)=> a+b)
      return suma / course.tblReviews.length;
    })

}
catch(error){
          return error.message;
        
        }}

module.exports = getCourses; 