const { DataTypes } = require('sequelize');


module.exports = sequelize => {
    sequelize.define('tblVideos', {
  PK_Video: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  Title: {
    type: DataTypes.STRING
    
  },
  Duration: {
    type: DataTypes.INTEGER

  },
  URL: {
    type: DataTypes.STRING
  }, 
}, {
  timestamps: false}
)};
