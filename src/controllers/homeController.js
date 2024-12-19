const connection = require("../config/database");

const getHomepage = (req, res) => {
  res.render("homePage.ejs");
};
const getDao = (req, res) => {
  res.render("sample.ejs");
};
const createUser = (req, res) => {
  console.log(">>>", req.body);

  res.send("Create user");
};
module.exports = {
  getHomepage: getHomepage,
  getDao: getDao,
  createUser: createUser,
};
