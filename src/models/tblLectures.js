const { DataTypes } = require('sequelize');


module.exports = sequelize => {
    sequelize.define('tblLectures', {
  PK_Lecture: {
    type: DataTypes.INTEGER,
    allowNull: false,
primaryKey: true,
autoIncrement: true
  },
  Title: {
    type: DataTypes.STRING
    
  },
  Description: {
    type: DataTypes.STRING
    
  },
  Pub_Date: {
    type: DataTypes.DATEONLY
    
  },
  Videos: {
    type: DataTypes.ARRAY(DataTypes.STRING)
    
  },
  Length: {
    type: DataTypes.INTEGER
    
  },
        // FK_Course: {
        // type: DataTypes.INTEGER,
        // allowNull: false,
        // references: {
        //     model: 'tblCourses',
        //     key: 'PK_Courses'
        // }
        // },
    

    
}, {
  timestamps: false}
)};

