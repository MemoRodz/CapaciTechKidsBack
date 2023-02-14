require('dotenv').config();
const { Sequelize, Op} = require('sequelize');

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



const { /* modelos */ } = sequelize.models;  

// Acá van las relaciones: 





module.exports = {
   ...sequelize.models,
   sequelize,
   Op
}; 
