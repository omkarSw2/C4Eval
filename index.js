const express = require("express");
const mongoose = require("mongoose");
const process = require("dotenv");
const bcrypt = require("bcrypt");
const app = express();
app.use(express.json());

const conntect = async (req, res) => {
  try {
    let data = await mongoose.connect(
      "mongodb+srv://omkar21143:omkar21143@cluster0.kpdkldx.mongodb.net/Crud"
      );
      

    console.log("conected");
  } catch (error) {
    console.log(error);
  }
};

app.listen(8080, (req, res) => {
  conntect();
  console.log("Connecting");
});
