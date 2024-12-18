const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME;
const configViewEngine = require("./config/viewEngine");
const mysql = require("mysql2");
const webRoutes = require("./routers/web");
configViewEngine(app);
app.use("/", webRoutes);
const connection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "123456",
  database: "hoidanit",
});
connection.query("SELECT * FROM `Users` ", (err, result) => {
  console.log(">>>", result);
});
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
