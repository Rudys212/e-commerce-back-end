// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  as: "product_category",
});
// Categories have many Products
Category.hasMany(Product, {
  as: "categories_products",
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
    foreignKey: "product_id",
  },
  as: "productTag",
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
    foreignKey: "tag_id",
  },
  as: "tagProduct",
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
