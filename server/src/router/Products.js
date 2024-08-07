const express = require("express");
const mongoose = require("mongoose");
const Product = require("../model/product");
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().lean();
    return res.json(products);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const products = await Product.findById();
    return res.json(products);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.post("/add", async (req, res) => {
  try {
    const product = new Product({
      title: req.body.title,
      author: req.body.author,
      img: req.body.img,
      stock: req.body.stock,
      category: req.body.category,
      description: req.body.description,
      isFeatured: req.body.isFeatured,
      isActive: req.body.isActive,
      price: req.body.price,
      type: req.body.type,
    });
    await product.save();
    return res.json(product);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      author: req.body.author,
      img: req.body.img,
      stock: req.body.stock,
      category: req.body.category,
      description: req.body.description,
      isFeatured: req.body.isFeatured,
      isActive: req.body.isActive,
      price: req.body.price,
      type: req.body.type,
    });

    return res.json(updateProduct);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    return res.json(deleteProduct);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
