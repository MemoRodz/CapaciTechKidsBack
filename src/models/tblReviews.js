const { DataTypes } = require('sequelize'); 



module.exports = sequelize => {
    sequelize.define('tblReviews', {
        PK_Review: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull : false,
            autoIncrement : true
        },
        Score: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        Comment: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Creation_Date: {
            type: DataTypes.STRING,
            allowNull: true
        },
        
    },{ timestamps: false }
    )
};