const express = require("express");
const router = express.Router();

const User = require("../models/User");

/* GET home page */
router.get("/profile/:id", (req, res) => {
  User.findById(req.params.id)
    .then(theUser => res.json(theUser))
    .catch(err => console.log("Error", err));
});
module.exports = router;
