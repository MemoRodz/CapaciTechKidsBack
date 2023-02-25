
 const {tblCourses,tblUsers,tblCatXCourses,tblCategories} = require("../DB_connection.js");
const UsersRouter = require("../routes/UsersRoutes.js");



const register = async (user) => {

    let inverify = {}
    try{
   let verify = await tblUsers.findOne({
        where : {
            Email : user.email
        }
    })

    
    return verify 
    ? verify = Object.assign({}, user, verify.dataValues) 
    : (inverify = await tblUsers.create({Email: user.email}), Object.assign({}, user, inverify.dataValues));

    }
catch(error){
          return error.message;
        
        }}


module.exports = register 