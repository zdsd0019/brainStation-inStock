const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const inventory = require("../instock-data/inventory.json");
const moment = require("moment");

//Route to get all inventory items
router.get("/inventory", (req, res) => {
  res.status(200).json(inventory);
});

//Route to get selected inventory item
router.get('/inventory/:id', (req, res) => {
  const invId = req.params.id;
	const selectedInventory = inventory.find(inv => {
		return inv.id === invId;
  });
  if(!selectedInventory)
    {
        res.status(404).json({error: 'Product does not exist!!!'});
    } else {
    res.json(selectedInventory);
  }
})

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
    id: uuidv4(),
    name: req.body.name,
    description: req.body.description,
    quantity: req.body.quantity,
    lastOrdered: date,
    city: req.body.city,
    country: req.body.country,
    isInstock: req.body.status,
    warehouseId: "W" + uuidv4(),
  };

  inventory.push(newInventoryItem);

  res.status(201).json(newInventoryItem);
});

const deleteSingleItem = ( req, res) => {
  inventory.forEach((item, i) => {
    if (item.id === req.params.id) {
      inventory.splice(i, 1);
      res.send('You have successfully deleted the item!!');
    } else {
      res.status(400).send('This request can not be completed, Please try again!!');
    };
  });
};

module.exports = router;
