
console.log(process.env.JWT_SECRET);
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes =
  require("./routes/authRoutes");

const productRoutes =
  require("./routes/productRoutes");

const app = express();


// DATABASE CONNECTION
connectDB();


// MIDDLEWARE
app.use(cors());
app.use(express.json());


// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);


// HOME ROUTE
app.get("/", (req, res) => {
  res.send("PowerPlay Sports API Running");
});


// SERVER
const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});

app.get("/test-signup", async (req, res) => {
  res.send("Signup Route Exists");
});