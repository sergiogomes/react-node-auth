// Mongoose model schema for user
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

// Define model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
});

// On save hook, encrypt password
// Before saving a model, run this function
userSchema.pre("save", function (next) {
  // Get access to user model.
  // Had to use normal function here to access this
  const user = this;

  // Generate a salt then run callback
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    // Hash (encrypt) password useing the hash
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) {
        return next(err);
      }

      // Overwrite plain text password with encrypted password
      user.password = hash;
      next();
    });
  });
});

// Create model calss
const ModelClass = mongoose.model("user", userSchema);

// export the model
module.exports = ModelClass;
