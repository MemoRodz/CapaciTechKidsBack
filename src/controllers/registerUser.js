
 const {tblCourses,tblUsers,tblCatXCourses,tblCategories} = require("../DB_connection.js");
const UsersRouter = require("../routes/UsersRoutes.js");



const register = async (user) => {
    console.log(user)
    try{
    const verify = await tblUsers.findOne({
        where : {
            Email : user.email
        }
    })
    
  return  verify ? verify : await tblUsers.create({
            Name : user.name,
            Email : user.email,
            Image : user.picture
        })
 
}


catch(error){
          return error.message;
        
        }}


module.exports = register 