const { DataTypes } = require('sequelize');


module.exports = sequelize => {
    sequelize.define('tblUsers', {
        PK_Users: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull : false,
            autoIncrement : true
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        UserType: {
            type: DataTypes.ENUM(
                'Admin',
                'AdvUser',
                'Instructor',
                'Student'
            ),
            defaultValue: 'Student',
        },
        Register_Date: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        Active : {
            type: DataTypes.BOOLEAN,
            defaultValue : true
        }
    },
        {timestamps: false}
    );
};