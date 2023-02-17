require('dotenv').config();
const { Sequelize, Op, BelongsTo} = require('sequelize');
const modeltblUsers = require('./models/tblCourses');
const modeltblCourses = require('./models/tblUsers');
const modeltblLectures = require('./models/tblLectures');
const modeltblExams = require('./models/tblExams');
const modeltblQuestions = require('./models/tblQuestions');
const modeltblCategories = require("./models/tblCategories");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY, DB_DB } = process.env;


// postgres://DB_USER:DB_PASSWORD@DB_HOST/NOMBREBASEDEDATOS ESTRUCTURA DATOS SEQUELIZE

 const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DB}`,
   // URL
   { 
   logging: false, 
   native: false 
}
);

/*  const sequelize = new Sequelize(DB_DEPLOY,
   { 
   logging: false, 
   native: false 
}
); CLAVE PARA EL FUTURO DEPLOY*/ 

//Acá irán las funciones de los modelos. ej: modelStudents(sequelize)

modeltblUsers(sequelize);
modeltblCourses(sequelize);
modeltblLectures(sequelize);
modeltblExams(sequelize);
modeltblQuestions(sequelize);
modeltblCategories(sequelize);




const { tblUsers, tblCourses, tblLectures, tblExams, tblQuestions , tblCategories } = sequelize.models;

// Acá van las relaciones: 

// Relación de Courses con Categories.
tblCourses.belongsToMany(tblCategories, { through: "tblCatXCourses", unique:false });
tblCategories.belongsToMany(tblCourses, { through: "tblCatXCourses", unique:false});

// Relación de Users con Courses.
tblCourses.belongsTo(tblUsers, {
       foreignKey: "PK_User"
   });

tblLectures.belongsTo(tblCourses, {
      foreignKey: "PK_Courses"
   });

// Relación de Exams con Questions.
tblExams.belongsTo(tblLectures, {
      foreignKey: "PK_Lectures"
   });

tblQuestions.belongsTo(tblExams, {
      foreignKey: "PK_Exams"
   });




module.exports = {
   ...sequelize.models,
   sequelize,
   Op
}; 
