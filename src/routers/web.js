const express = require("express");
const router = express.Router();
const { getHomepage, getDao } = require("../controllers/homeController");
router.get("/", getHomepage);
router.get("/dao", getDao);
module.exports = router;
