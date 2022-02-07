// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


             // 1 player 1 team


// Products belongsTo Category
// foreign key connection referenced in Product.js
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});


              //1 team many players


// Categories have many Products
// foreign key connection referenced in Product.js?
Category.hasMany(Product, {
  foreignKey: 'category_id'

});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag, // because ProductTag.js contains product_id foreignkey reference
  foreignKey: 'product_id',
  
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag, // because ProductTag.js contains tag_id foreignkey reference
  foreignKey: 'tag_id',
  
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
