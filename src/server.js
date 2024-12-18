const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME;
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routers/web");
configViewEngine(app);
app.use("/", webRoutes);
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
