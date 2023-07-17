const { Schema } = require("mongoose");

const User = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  gender: { type: String, require: true },
  password: { type: String, require: true },
});
const Users = mongoose.model("user", User);
module.exports = Users;
