const auth = require("../middleware/auth");
const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

// GET all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// ADD product
router.post("/add", auth, async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json({ message: "Product added" });
});


// DELETE product
router.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
});

// UPDATE product
router.put("/:id", async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Product updated" });
});

module.exports = router;
