const { DataTypes } = require('sequelize'); 

/*
    Para los campos que permiten los valores NULOS sólo es para 
    la etapa DEV, cuando se liberé el proyecto
*/

module.exports = sequelize => {
    sequelize.define('tblCourses', {
<<<<<<< Updated upstream
        PK_Courses: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull : false,
            autoIncrement : true
=======
        PK_Course: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
>>>>>>> Stashed changes
        },
        Title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Category: {
            type: DataTypes.ENUM(
                'Design',
                'Development',
                'Business',
                'Marketing',
                'Other'
            ),
            defaultValue: 'Other',
        },
        Start_Date: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        End_Date: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        Image:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Duration: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        Active : {
            type: DataTypes.BOOLEAN,
            defaultValue : false,
            allowNull:false
        },
        Score : {
            type: DataTypes.INTEGER
        },
    //     FK_Instructor: {
    //         type: DataTypes.INTEGER,
    //         allowNull: false,
    //         references: {
    //             model: 'tblUsers',
    //             key: 'PK_User'
    //         }
    // },
    },
        { timestamps: false }
    );
};