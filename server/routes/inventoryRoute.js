const express = require("express");
const router = express.Router();
const uuid = require("uuid/v4");

router.post("/inventory", (req, res) => {
  //check for empty input
  if (req.body.name === "" || req.body.city === "" || req.body.country === "") {
    res.status(400).send("missing data");
  }

  //check that the name and city only contains letters
  function onlyLetters(str) {
    for (let index = 0; index < str.length; index++) {
      if (str[index].toLowerCase() === str[index].toUpperCase()) {
        return false;
      }
    }

    return true;
  }

  if (!onlyLetters(req.body.name) || !onlyLetters(req.body.city)) {
    res.status(400).send("enter a valid input field");
  }

  //check quantity input is a number
  function isNumber(n) {
    return typeof n != "boolean" && !isNaN(n);
  }
  if (!isNumber(req.body.quantity)) {
    res.status(400).send("enter a number value");
  }

  let newInventoryItem = {
    id: uuid,
    name: req.body.name,
    city: req.body.city,
    country: req.body.country,
    date: req.body.data,
    quantity: req.body.quantity,
    status: req.body.status,
    description: req.body.description,
  };

  res.status(201).json(newInventoryItem);
});

module.exports = router;
