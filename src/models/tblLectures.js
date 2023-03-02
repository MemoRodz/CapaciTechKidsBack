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
    type: DataTypes.TEXT
    
  },
  Pub_Date: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW
},
  Video: {
    type: DataTypes.STRING,
    allowNull : true
    
  },
  NoVideo: {
    type: DataTypes.INTEGER,
    allowNull : true
  }
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

