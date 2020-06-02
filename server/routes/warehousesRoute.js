const express = require("express");
const router = express.Router();
const locations = require("../instock-data/locations.json");

router.get("/", (req, res) => {
    res.status(200).json(locations);
});

module.exports = router;