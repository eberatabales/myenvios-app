const express = require("express");
const router = express.Router();
const {
  getAllPackages,
  createPackage,
} = require("../controllers/packageController");

router.get("/packages", getAllPackages);
router.post("/package", createPackage);

module.exports = router;