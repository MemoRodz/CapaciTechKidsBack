
 const {tblCourses,tblUsers,tblCatXCourses,tblCategories} = require("../DB_connection.js");
const UsersRouter = require("../routes/UsersRoutes.js");



const register = async (user) => {
    console.log(user)
    try{
        await tblUsers.create({
            Name : user.name,
            Email : user.email,
            Image : user.picture
        })
    return  tblUsers.findOne({
        where : {
            Email : user.email
        }
    })   
}


catch(error){
          return error.message;
        
        }}


module.exports = register 