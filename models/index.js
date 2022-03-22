// import models
const sequelize=require('../config/connection')
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');



// Products belongsTo Category []
Product.belongsTo(Category);
Category.hasMany(Product);


Product.belongsToMany(Tag,{through:'productTag',
foreignKey:'product_id'});
Tag.belongsToMany(Product,{
  through:'productTag',
  foreignKey:'tag_id'
})

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
