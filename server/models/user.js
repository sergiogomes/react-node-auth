// Mongoose model schema for user
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
});

// Create model calss
const ModelClass = mongoose.model("user", userSchema);

// export the model
module.exports = ModelClass;
