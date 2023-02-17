const {tblCourses,tblUsers,tblCatXCourses,tblCategories} = require("../DB_connection.js");



const getCategory = async (Category) => {
    console.log(Category)
    try{
    const filtered =  await tblCategories.findOne( 
            { attribute: "PK_Category", 
                where: {
                    Name: Category} 
                })
       console.log(filtered.PK_Category)
      return await tblCatXCourses.findAll({
            where: {
                tblCategoryPKCategory : filtered.PK_Category
            }
    
})
}

catch(error){
          return error.message;
        
        }}

module.exports = getCategory; 