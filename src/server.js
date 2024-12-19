const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME;
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routers/web");
const connection = require("./config/database");
//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
configViewEngine(app);
app.use("/", webRoutes);

connection.query("SELECT * FROM `Users` ", (err, result) => {
  // console.log(">>>", result);
});
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
