const express = require("express");

const Product =
  require("../models/Product");

const router = express.Router();


// GET ALL PRODUCTS

router.get("/", async (req, res) => {

  try {

    const products =
      await Product.find();

    res.json(products);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});


// ADD PRODUCT

router.post("/", async (req, res) => {

  try {

    const {
      name,
      category,
      price,
      image,
      description
    } = req.body;

    const product =
      await Product.create({
        name,
        category,
        price,
        image,
        description
      });

    res.status(201).json(product);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

module.exports = router;