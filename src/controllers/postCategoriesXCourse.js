const {tblCourses,tblUsers,tblCatXCourses, tblCategories} = require("../DB_connection.js");

// CATEGORIA EN COURSE SE QUITA. LA FUNCION CREADORA DE COURSOS DEBE LLAMAR A LA FUNCION DE ACÁ, QUE GUARDARÁ UNA RELACION
// ENTRE UN CURSO Y SUS CATEGORIAS. 


const categoriesXCourses = async(id,array) => {

    const categoriesPks = await Promise.all(array.map(async (nombreCat) => {
        const result = await tblCategories.findOne({
          attributes: ["PK_Category"],
          where: {
            Name: nombreCat
          }
        });
        return result;
      }));

categoriesPks.forEach(cat => tblCatXCourses.create({
    tblCategoryPKCategory: cat.PK_Category,
    tblCoursePKCourse : id
   }) )
}



module.exports = categoriesXCourses; 