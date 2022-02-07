// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns

    //id column
    // id INT NOT NULL PRIMARY KEY AUTO_INCREMENT
    id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
    },
    // product name column
    // product_name VARCHAR NOT NULL
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    // price column
    // price DECIMAL NOT NULL
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,

      //validate decimal value
      validate: {
        isDecimal: true
      }
    },
    
    // stock column
    // stock INT NOT NULL DEFAULT 10
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,

      //validate numeric value
      validate: {
        isNumeric: true
      }
    },

    // category id column
    // category_id INT 
    category_id: {
      type: DataTypes.INTEGER,
      // reference category id from Category.js
      //FOREIGN KEY (category_id) REFERENCES category(category_id)

      references: {
        model: "category",
        key: "id"
      }
    }
  },


  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
