const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [
      {
        model: Product,
        as: "categories_products",
      },
    ],
  })
    .then((categories) => res.status(200).json(categories))
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value

  // be sure to include its associated Products
  Category.findByPk(req.params.id, {
    include: [
      {
        model: Product,
        as: "categories_products",
      },
    ],
  })
    .then((findCategory) => res.status(200).json(findCategory))
    .catch((err) => res.status(500).json(err));
});

router.post("/", (req, res) => {
  // create a new category
  Category.create(req.body)
    .then((createCategory) => res.status(200).json(createCategory))
    .catch((err) => res.status(500).json(err));
});

router.put("/:id", (req, res) => {
  console.log("id", req.body);
  // update a category by its `id` value
  Category.update(req.body, {
    where: { id: req.params.id },
  })
    .then((updateCategory) => res.status(200).json(updateCategory))
    .catch((err) => res.status(500).json(err));
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deleteCategory) => res.status(200).json(deleteCategory))
    .catch((err) => res.status(500).json(err));
});
module.exports = router;
