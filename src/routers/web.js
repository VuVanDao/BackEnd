const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getDao,
  createUser,
  getCreateUser,
} = require("../controllers/homeController");
router.get("/", getHomepage);
router.get("/create", getCreateUser);
router.get("/dao", getDao);
router.post("/create-user", createUser);
module.exports = router;
