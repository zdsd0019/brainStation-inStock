const express = require("express");
const app = express();
const cors = require("cors");
const inventoryRoute = require("./routes/inventoryRoute");
const warehousesRoute = require("./routes/warehousesRoute");

app.use(express.json());
app.use(cors());
app.use("/", inventoryRoute);
app.use("/warehouses", warehousesRoute);

app.listen(8080, () => console.log("Server started at 8080"));
