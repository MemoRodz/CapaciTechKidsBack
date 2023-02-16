const { DataTypes } = require('sequelize'); 

module.exports = sequelize => {
    sequelize.define('tblCategories', {
        PK_Category: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull : false,
            autoIncrement : true
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: true
        },
    },
        { timestamps: false }
    );
};