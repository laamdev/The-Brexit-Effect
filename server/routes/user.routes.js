const express = require("express");
const router = express.Router();
const Conversion = require("../models/Conversion");

const User = require("../models/User");

router.post("/addConversion", (req, res) => {
  const { result, fromCurrency, toCurrency, amount } = req.body.conversion;

  Conversion.create({ result, fromCurrency, toCurrency, amount, user: req.body.user.data._id }).then(theNewConversion => {
    User.findByIdAndUpdate(req.body.user.data._id, { $push: { conversionList: theNewConversion._id } }, { new: true })
      .then(theNewConversion => {
        res.json(theNewConversion);
      })
      .catch(err => console.log("Error", err));
  });
});

router.get("/getAllConversions", (req, res) => {
  Conversion.find({ user: req.user._id })

    .then(allConversions => res.json(allConversions))

    .catch(err => console.log("Error", err));
});

router.post("/deleteConversion", (req, res, next) => {
  const conversionId = req.body.conversion;
  const userId = req.body.user;

  Conversion.findByIdAndRemove(conversionId)
    .then(x => res.status(200))
    .catch(err => console.log("Error", err));
});

module.exports = router;
