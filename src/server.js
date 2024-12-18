const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME;
app.set("views", path.join(__dirname, "views"));
app.get("/", (req, res) => {
  res.send("Hello World!!!");
});
app.get("/dao", (req, res) => {
  res.render("sample.ejs");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
