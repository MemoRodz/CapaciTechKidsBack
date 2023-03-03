
 const {tblCourses,tblUsers,tblCatXCourses,tblCategories} = require("../DB_connection.js");
const UsersRouter = require("../routes/UsersRoutes.js");



const register = async (user) => {
    const {email,name,picture} = user
//console.log(user)
    try{
   let verify = await tblUsers.findOne({
        where : {
            Email : email
        }
    })

    
    return verify 
    ? verify 
    : await tblUsers.create({Email: email,Image:picture,Name:name})

    }
catch(error){
          return error.message;
        
        }}


module.exports = register 