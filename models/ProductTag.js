const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns

    // id column
    // id INT NOT NULL PRIMARY KEY AUTO_INCREMENT
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    

  },

  // product_id
  // product_id INT 
  product_id: {
    type: DataTypes.INTEGER,
  // FOREIGN KEY (product_id) REFERENCES product(product_id)
  references: {
    model: 'product',
    key: 'id'
  } 

},

   // tag_id column
   // tag_id INT
  tag_id: {
    type: DataTypes.INTEGER,

   // FOREIGN KEY (tag_id) REFERENCES tag (tag_id)
   references: {
     model: 'tag',
     key: 'id'
   } 
  }

},


  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
