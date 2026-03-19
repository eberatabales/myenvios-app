const express = require("express");
const router = express.Router();

const {
  getAllPackages,
  getPackageById,
  updatePackageStatus,
  createPackage,
} = require("../controllers/packageController");

// Rutas
router.get("/packages", getAllPackages);
router.get("/packages/:id", getPackageById);
router.post("/packages", createPackage);

//id status
router.patch("/packages/:id/status", updatePackageStatus);

module.exports = router;