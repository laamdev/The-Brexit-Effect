const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    result: String,
    fromCurrency: String,
    toCurrency: String,
    amount: String,
    user: { type: Schema.Types.ObjectId, ref: "User" }
  },
  { timestamps: true }
);

const Conversion = mongoose.model("Conversion", UserSchema);
module.exports = Conversion;
