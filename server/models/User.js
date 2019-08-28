const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: String,
    password: String,
    imageURL: String,
    money: Number,
    conversionHistory: { type: Schema.Types.ObjectId, ref: "Conversions" }
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
