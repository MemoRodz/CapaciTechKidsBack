require('dotenv').config();
const { Sequelize, Op, BelongsTo } = require('sequelize');
const modeltblUsers = require('./models/tblUsers');
const modeltblCourses = require('./models/tblCourses');
const modeltblLectures = require('./models/tblLectures');
const modeltblExams = require('./models/tblExams');
const modeltblQuestions = require('./models/tblQuestions');
const modeltblCategories = require("./models/tblCategories");
const modeltblReviews = require("./models/tblReviews");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY, DB_DB } = process.env;


// postgres://DB_USER:DB_PASSWORD@DB_HOST/NOMBREBASEDEDATOS ESTRUCTURA DATOS SEQUELIZE

 const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DB}`,
   // URL
   { 
   logging: false, 
   native: false 
}
);

// const sequelize = new Sequelize(DB_DEPLOY,
//    {
//       logging: false,
//       native: false
//    }
// );

//Acá irán las funciones de los modelos. ej: modelStudents(sequelize)

modeltblUsers(sequelize);
modeltblCourses(sequelize);
modeltblLectures(sequelize);
modeltblExams(sequelize);
modeltblQuestions(sequelize);
modeltblCategories(sequelize);
modeltblReviews(sequelize);





const { tblUsers, tblCourses, tblLectures, tblExams, tblQuestions, tblCategories, tblReviews,tblRoutes } = sequelize.models;

// Acá van las relaciones: 


// Relación de Usuarios tipo Students a cursos.
// tblUsers.hasMany(tblCourses);
// tblCourses.hasMany(tblUsers);

tblCourses.belongsToMany(tblCategories, { through: "tblCatXCourses", unique: false });
tblCategories.belongsToMany(tblCourses, { through: "tblCatXCourses", unique: false });


tblCourses.belongsToMany(tblUsers, { through: "tblUsersXCourses", unique: false });
tblUsers.belongsToMany(tblCourses, { through: "tblUsersXCourses", unique: false });

tblLectures.belongsTo(tblCourses, {
   foreignKey: "PK_Courses"
});

tblLectures.belongsToMany(tblUsers, { through: "tblUsersXLectures", unique: false });
tblUsers.belongsToMany(tblLectures, { through: "tblUsersXLectures", unique: false });

// // Relación de Exams con Questions.
// tblExams.belongsTo(tblLectures, {
//    foreignKey: "PK_Lectures"
// });

// tblQuestions.belongsTo(tblExams, {
//    foreignKey: "PK_Exams"
// });

tblReviews.belongsTo(tblCourses, {
   foreignKey: "PK_Course"
});

tblCourses.hasMany(tblReviews, {
   foreignKey: 'PK_Course'
});

tblReviews.belongsTo(tblUsers, {
   foreignKey: "PK_User"
});






module.exports = {
   ...sequelize.models,
   sequelize,
   Op
}; 
