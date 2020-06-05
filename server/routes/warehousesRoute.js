const express = require("express");
const router = express.Router();
const locations = require("../instock-data/locations.json");
const inventory = require("../instock-data/inventory.json");

router.get("/", (req, res) => {
    res.status(200).json(locations);
});

router.get("/:id", (req, res) => {
    let warehouseId = req.params.id;

    let selectedWarehouse = locations.find(location => {
        return location.id === warehouseId;
    });

    if (!selectedWarehouse) {
        return res.status(404).json({
            "error": "Warehouse ID does not match with one of our Warehouses."
        });
    } else {
        let selectedWarehouseInventory = inventory.filter(item => {
            return item.warehouseId === warehouseId;
        });
        selectedWarehouse.inventory = selectedWarehouseInventory;
        return res.status(200).json(selectedWarehouse);
    }
});

module.exports = router;