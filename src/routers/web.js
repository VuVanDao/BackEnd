const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getDao,
  createUser,
} = require("../controllers/homeController");
router.get("/", getHomepage);
router.get("/dao", getDao);
router.post("/create-user", createUser);
module.exports = router;
