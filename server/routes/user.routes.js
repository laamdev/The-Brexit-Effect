const express = require("express");
const router = express.Router();
const Conversion = require("../models/Conversion");

router.post("/addConversion", (req, res) => {
  Conversion.create(req.body)
    .then(theNewConversion => res.json(theNewConversion))
    .catch(err => console.log("Error", err));
});

router.get("/getAllConversions", (req, res) => {
  Conversion.find()
    .then(allConversions => res.json(allConversions))
    .catch(err => console.log("Error", err));
});

router.post("/:id/deleteConversion", (req, res, next) => {
  const conversionId = req.params.id;

  Conversion.findByIdAndRemove(conversionId)
    .then(x => res.status(200))
    .catch(err => console.log("Error", err));
});

module.exports = router;
