const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: String,
    password: String,
    imageURL: String,
    money: Number,
    conversionList: [{ type: Schema.Types.ObjectId, ref: "Conversion" }]
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
