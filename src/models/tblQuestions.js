const { DataTypes } = require('sequelize');


module.exports = sequelize => {
    sequelize.define('tblQuestions', {
        PK_Question: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull : false,
            autoIncrement : true
        },
        Statement: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Options: {
            type: DataTypes.ENUM(
                'A',
                'B',
                'C',
                'D'
            ),
            defaultValue: 'A',
        },
        Answer: {
            type: DataTypes.STRING,
            allowNull: true
        },
        FK_Exam: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'tblExams',
                key: 'PK_Exam'
            }

        },
        },
        {timestamps: false}
    );
};