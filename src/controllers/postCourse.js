const {tblCourses,tblUsers} = require("../DB_connection.js");



const postCourse = async (Title,Description,Start_Date,End_Date,Professor,Category,Image,Duration,Active,Score) => {
    const PK_User = Professor

    try{
    return tblCourses.create({
        Title,
        Description,
        Start_Date,
        End_Date,
        PK_User,
        Image,
        Duration,
        Active,
        Score,
        Category 
    }
    )}
    catch(error){
    throw error
    }
}

module.exports = postCourse; 