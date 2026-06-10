const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./models/Product");

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {

    // Delete old products
    await Product.deleteMany({});

    // Insert new products
    await Product.insertMany([

      {
        name: "MRF Genius Grand",
        category: "Bat",
        price: 8999,
        image: "images/cricketbat.jpg",
        description: "Premium English Willow Bat"
      },

      {
        name: "SS Ton Reserve",
        category: "Bat",
        price: 7999,
        image: "images/cricketbat.jpg",
        description: "Professional Cricket Bat"
      },

      {
        name: "GM Diamond",
        category: "Bat",
        price: 6999,
        image: "images/cricketbat.jpg",
        description: "English Willow Bat"
      },

      {
        name: "SG Test Ball",
        category: "Ball",
        price: 499,
        image: "images/cricketball.jpg",
        description: "Leather Cricket Ball"
      },

      {
        name: "Kookaburra Ball",
        category: "Ball",
        price: 699,
        image: "images/cricketball.jpg",
        description: "International Cricket Ball"
      },

      {
        name: "Puma 22 Yards",
        category: "Shoes",
        price: 3499,
        image: "images/cricketshoes.jpg",
        description: "Premium Cricket Shoes"
      },

      {
        name: "Adidas Howzat",
        category: "Shoes",
        price: 3999,
        image: "images/cricketshoes.jpg",
        description: "Professional Cricket Shoes"
      },

      {
        name: "SS Gloves",
        category: "Gloves",
        price: 1999,
        image: "images/cricketbat.jpg",
        description: "Batting Gloves"
      },

      {
        name: "Shrey Helmet",
        category: "Helmet",
        price: 4999,
        image: "images/cricketbat.jpg",
        description: "Cricket Helmet"
      },

      {
        name: "Cricket Stumps",
        category: "Stumps",
        price: 1499,
        image: "images/cricketbat.jpg",
        description: "Professional Stumps"
      },

      {
        name: "Team India Jersey",
        category: "Jersey",
        price: 1299,
        image: "images/cricketbat.jpg",
        description: "Official Style Jersey"
      },

      {
        name: "Training Kit",
        category: "Accessories",
        price: 999,
        image: "images/cricketbat.jpg",
        description: "Practice Kit"
      }

    ]);

    console.log("Products Added Successfully");

    process.exit();

  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });