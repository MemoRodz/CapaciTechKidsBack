const { DataTypes } = require('sequelize');


module.exports = sequelize => {
    sequelize.define('tblUsers', {
        PK_Users: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false
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
        }
    },
        {timestamps: false}
    );
};