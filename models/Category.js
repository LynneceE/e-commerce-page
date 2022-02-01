const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init( // CREATE TABLE category
  {
    // define columns

    // id column 
    //id INT NOT NULL PRIMARY KEY AUTO_INCREMENT
    id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
    },
    
    // category name colimn
    //category_name VARCHAR NOT NULL
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
    
  },

    
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
