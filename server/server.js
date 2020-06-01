const express = require("express");
const app = express();
const cors = require("cors");
const inventoryRoute = require("./routes/inventoryRoute");

app.use(express.json());
app.use(cors());
app.use("/", inventoryRoute);

app.listen(8080, () => console.log("Server started at 8080"));
