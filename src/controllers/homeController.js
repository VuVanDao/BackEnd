const connection = require("../config/database");
const { get } = require("../routers/web");
const { getAllUsers } = require("../services/CRUDservice");

const getHomepage = async (req, res) => {
  let result = await getAllUsers();
  res.render("homePage.ejs", { ListUsers: result });
};
const getCreateUser = (req, res) => {
  res.render("createUser.ejs");
};
const getEditUser = (req, res) => {
  res.render("editUser.ejs");
};
const getDao = (req, res) => {
  res.render("sample.ejs");
};
const createUser = async (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let city = req.body.city;
  let [result] = await connection.query(
    `INSERT INTO Users  (name,email,city) 
     values (?,?,?); `,
    [name, email, city]
  );
  if (result.affectedRows > 0) {
    res.redirect("/");
  } else {
    res.send("Error in creating user");
  }
};
module.exports = {
  getHomepage: getHomepage,
  getDao: getDao,
  createUser: createUser,
  getCreateUser: getCreateUser,
  getEditUser: getEditUser,
};
