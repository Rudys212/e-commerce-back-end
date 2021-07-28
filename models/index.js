// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  through: {
    model: Tag,
    unique: false,
  },
  as: "product_category",
});
// Categories have many Products
Category.belongsTo(Product, {
  through: {
    model: Tag,
    unique: false,
  },
  as: categories_products,
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: "productTag",
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: "tagProduct",
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
