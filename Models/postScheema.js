const { Schema } = require("mongoose");

const Post = new Schema({
  title: { type: String, require: true },
  body: { type: String, require: true },
  device: { type: String, require: true },
});
const Posts = mongoose.model("post", Post);
module.exports = Posts;
