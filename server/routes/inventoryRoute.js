const express = require("express");
const router = express.Router();
const uuid = require("uuid/v4");
const inventory = require("../instock-data/inventory.json");
const moment = require("moment");

//Route to get all inventory items
router.get("/inventory", (req, res) => {
  res.status(200).json(inventory);
});

//Route to post new inventory item
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

  if (!onlyLetters(req.body.city)) {
    res.status(400).send("enter a valid input field");
  }

  //check quantity input is a number
  function isNumber(n) {
    return typeof n != "boolean" && !isNaN(n);
  }
  if (!isNumber(req.body.quantity)) {
    res.status(400).send("enter a number value");
  }

  let date = req.body.date;

  date = moment(date);
  date = date.format("MM/DD/YYYY");

  let newInventoryItem = {
    id: uuid(),
    name: req.body.name,
    description: req.body.description,
    quantity: req.body.quantity,
    lastOrdered: date,
    city: req.body.city,
    country: req.body.country,
    isInstock: req.body.status,
    warehouseId: "W" + uuid(),
  };

  inventory.push(newInventoryItem);

  res.status(201).json(newInventoryItem);
});

module.exports = router;
