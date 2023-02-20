const { DataTypes } = require('sequelize'); 

/*
    Para los campos que permiten los valores NULOS sólo es para 
    la etapa DEV, cuando se liberé el proyecto
*/

module.exports = sequelize => {
    sequelize.define('tblCourses', {
        PK_Course: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull : false,
            autoIncrement : true
        },
        Title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Image:{
            type: DataTypes.STRING,
            allowNull: true
        },
        Duration: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        Active : {
            type: DataTypes.BOOLEAN,
            allowNull:true
        },
        Score : {
            type: DataTypes.INTEGER,
            allowNull:true
        }
    },
        { timestamps: false }
    );
};