require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoutes = require("./router/authRoutes");
const adminRoutes = require("./router/adminRoutes");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err) => {
    console.log("DB error!" + err.message);
  });

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
