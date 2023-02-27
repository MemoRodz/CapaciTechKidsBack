
 const {tblCourses,tblUsers,tblCatXCourses,tblCategories} = require("../DB_connection.js");
const UsersRouter = require("../routes/UsersRoutes.js");



const register = async (user) => {
console.log(user)
    let inverify = {}
    try{
   let verify = await tblUsers.findOne({
        where : {
            Email : user.email
        }
    })
   const {email_verified,family_name,given_name,locale,name,nickname,picture,sub} = user
    
    return verify 
    ? verify = Object.assign({}, email_verified,family_name,given_name,locale,name,nickname,picture,sub, verify.dataValues) 
    : (inverify = await tblUsers.create({Email: user.email}), Object.assign({}, email_verified,family_name,given_name,locale,name,nickname,picture,sub,inverify.dataValues));

    }
catch(error){
          return error.message;
        
        }}


module.exports = register 