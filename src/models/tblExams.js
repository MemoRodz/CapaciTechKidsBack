const { DataTypes } = require('sequelize');


module.exports = sequelize => {
    sequelize.define('tblExams', {
        PK_Exam: {
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
        Questions: {
            type: DataTypes.ARRAY(DataTypes.STRING), // puede que termine siendo otra tabla/relación 
            allowNull: true
        },
    //     FK_Lecture: {
    //         type: DataTypes.INTEGER,
    //         allowNull: true,
    //         references: {
    //             model: 'tblLectures',
    //             key: 'PK_Lecture'
    //         }

    // ,

    // }
    
        },
        {timestamps: false}
    );
};

type: DataTypes.ENUM(
    'Admin',
    'AdvUser',
    'Instructor',
    'Student'
)