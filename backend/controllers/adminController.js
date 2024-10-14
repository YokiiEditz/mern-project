const Admin = require("../models/admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const dbUser = await Admin.findOne({ email, password });

    if (dbUser) {
      console.log("admin", dbUser);
      const token = await jwt.sign({ dbUser }, process.env.ACCESS_TOKEN_SECRET);

      res
        .cookie("access_token2", token)
        .json({ email: dbUser.email, message: "Admin logined" });
    } else {
      res.status(404).json({ message: "Wrong credentials" });
    }
  } catch (error) {
    res.status(404).json({ message: `Admin not logined! ${error.message}` });
  }
};

const logout = async (req, res) => {
  res.cookie("access_token2", "").json({ status: "ok" });
};

const profile = async (req, res) => {
  const { access_token2 } = await req.cookies;
  await jwt.verify(
    access_token2,
    process.env.ACCESS_TOKEN_SECRET,
    {},
    (err, info) => {
      if (err) throw err;

      console.log("token-server", info);
      res.json(info);
    }
  );
};

module.exports = { login, logout, profile };
