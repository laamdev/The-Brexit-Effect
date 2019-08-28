const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    result: String,
    fromCurrency: String,
    toCurrency: String,
    amount: String
  },
  { timestamps: true }
);

const Exchange = mongoose.model("Exchange", UserSchema);
module.exports = Exchange;
