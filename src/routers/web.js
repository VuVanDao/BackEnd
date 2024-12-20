const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getDao,
  createUser,
  getCreateUser,
  getEditUser,
  updateUser,
  getDeleteUSer,
  deleteUSer,
} = require("../controllers/homeController");
router.get("/", getHomepage);

router.get("/create", getCreateUser);
router.post("/create-user", createUser);

router.get("/update/:id", getEditUser);
router.post("/update-user", updateUser);

router.post("/delete-user/:id", getDeleteUSer);
router.post("/delete-user", deleteUSer);
router.get("/dao", getDao);

module.exports = router;
