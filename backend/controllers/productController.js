const Product = require("../models/product");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getProducts = async (req, res) => {
  const allProducts = await Product.find({}).populate("adminId");

  if (allProducts) {
    res.status(200).json({
      count: allProducts.count,
      data: allProducts,
    });
  }

  console.log("Product not found!");
};

const createProduct = async (req, res) => {
  const { pname, brand, description } = req.body;
  const { access_token2 } = req.cookies;
  try {
    if (!access_token2) {
      console.log("Token is required!");
      res.status(404).json({ message: "Token is required!" });
    }

    jwt.verify(
      access_token2,
      process.env.ACCESS_TOKEN_SECRET,
      {},
      async (err, userinfo) => {
        if (err) {
          console.log("Token is not here!");
          res.status(404).json({ message: "Token is must be required!" });
        }

        const data = {
          pname,
          brand,
          description,
          adminId: userinfo.dbUser._id,
        };

        const newProduct = await Product.create(data);
        if (newProduct) {
          res.status(201).json(data);
        } else {
          console.log("Product not created");
        }
      }
    );
  } catch (error) {
    console.log("Create error!" + error.message);
  }
};

module.exports = { getProducts, createProduct };
