const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class Blogpost extends Model {}

Blogpost.init(
  {
    id: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false,
      autoIncrement:true
    },
    blog_title:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    blog_content:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    user_id: {
      type:DataTypes.INTEGER,
      references:{
        model:'user',
        key:'id',
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    modelName: "blogpost",
    freezeTableName:true,
  }
);

module.exports = Blogpost;
