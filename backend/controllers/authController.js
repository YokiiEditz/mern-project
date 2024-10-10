const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const hash = await bcrypt.hashSync(password, 10);
    const userData = {
      email,
      password: hash,
    };

    const newUser = await User.create(userData);
    if (newUser) {
      res.status(201).json(newUser);
    } else {
      res.status(404).json({ message: "User not created" });
    }
  } catch (error) {
    res.status(404).json({ message: `User not created! ${error.message}` });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const dbUser = await User.findOne({ email });
    const compared = await bcrypt.compareSync(password, dbUser.password);

    if (dbUser && compared) {
      const { password: hashed, ...userDatas } = dbUser;

      const token = await jwt.sign(
        { userDatas },
        process.env.ACCESS_TOKEN_SECRET
      );

      res
        .cookie("access_token", token)
        .json({ email: dbUser.email, message: "User logined" });
    } else {
      res.status(404).json({ message: "Wrong credentials" });
    }
  } catch (error) {
    res.status(404).json({ message: `User not logined! ${error.message}` });
  }
};

const logout = async (req, res) => {
  res.cookie("access_token", "").json({ status: "ok" });
};

module.exports = { register, login, logout };
