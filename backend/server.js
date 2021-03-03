import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import products from "./data/products.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/products", (req, res) => {
  res.status(200).json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.status(200).json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`running on ${process.env.NODE_ENV} PORT ${PORT}`.yellow.bold)
);
