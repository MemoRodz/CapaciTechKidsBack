const { DataTypes } = require('sequelize');


module.exports = sequelize => {
    sequelize.define('tblUsers', {
        PK_User: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull : false,
            autoIncrement : true
        },
       
        Email: {
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
            defaultValue: sequelize.literal('CURRENT_DATE'),
            allowNull: false
        },
        Active : {
            type: DataTypes.BOOLEAN,
            defaultValue : true
        },
       
    },
        {timestamps: false}
    );
};