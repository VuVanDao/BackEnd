const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getDao,
  createUser,
  getCreateUser,
  getEditUser,
} = require("../controllers/homeController");
router.get("/", getHomepage);
router.get("/create", getCreateUser);
router.get("/update/:id", getEditUser);
router.get("/dao", getDao);
router.post("/create-user", createUser);
module.exports = router;
