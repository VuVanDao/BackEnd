const connection = require("../config/database");
const { get } = require("../routers/web");
const {
  getAllUsers,
  getEditUsers,
  updateUsers,
  createUsers,
  getDeleteUsers,
  deleteUsers,
} = require("../services/CRUDservice");

const getHomepage = async (req, res) => {
  let result = await getAllUsers();
  res.render("homePage.ejs", { ListUsers: result });
};
const getCreateUser = (req, res) => {
  res.render("createUser.ejs");
};
const createUser = async (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let city = req.body.city;
  let result = await createUsers(email, city, name);
  if (result.affectedRows > 0) {
    res.redirect("/");
  } else {
    res.send("Error in creating user");
  }
};
const getEditUser = async (req, res) => {
  let result = await getEditUsers(req.params.id);
  if (result.length > 0 && result) {
    res.render("editUser.ejs", { user: result[0] });
  } else {
    res.send("User not found");
  }
};
const updateUser = async (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let city = req.body.city;
  let id = req.body.id;
  let result = await updateUsers(email, city, name, id);
  if (result.affectedRows > 0) {
    res.redirect("/");
  } else {
    res.send("Error in updating user");
  }
};
const getDeleteUSer = async (req, res) => {
  let result = await getDeleteUsers(req.params.id);
  if (result.length > 0 && result) {
    res.render("deleteUser.ejs", { user: result[0] });
  } else {
    res.send("User not found");
  }
};
const deleteUSer = async (req, res) => {
  let id = req.body.id;
  let result = await deleteUsers(id);
  if (result) {
    res.redirect("/");
  } else {
    res.send("User not found");
  }
};
const getDao = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomepage: getHomepage,
  getDao: getDao,
  createUser: createUser,
  getCreateUser: getCreateUser,
  getEditUser: getEditUser,
  updateUser: updateUser,
  getDeleteUSer: getDeleteUSer,
  deleteUSer: deleteUSer,
};
