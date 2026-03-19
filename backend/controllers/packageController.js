const packages = require("../data/packages");

// GET /packages
const getAllPackages = (req, res) => {
  res.status(200).json({
    message: "Packages retrieved successfully",
    total: packages.length,
    data: packages,
  });
};

// GET /packages/:id
const getPackageById = (req, res) => {
  const packageId = Number(req.params.id);

  const foundPackage = packages.find((item) => item.id === packageId);

  if (!foundPackage) {
    return res.status(404).json({
      message: "Package not found",
    });
  }

  res.status(200).json({
    message: "Package retrieved successfully",
    data: foundPackage,
  });
};

// PATCH /packages/:id/status
const updatePackageStatus = (req, res) => {
  const packageId = Number(req.params.id);
  const { status } = req.body;

  const foundPackage = packages.find((item) => item.id === packageId);

  if (!foundPackage) {
    return res.status(404).json({
      message: "Package not found",
    });
  }

  if (!status) {
    return res.status(400).json({
      message: "Status is required",
    });
  }

  foundPackage.status = status;

  res.status(200).json({
    message: "Package status updated successfully",
    data: foundPackage,
  });
};

// POST /packages
const createPackage = (req, res) => {
  const { apartmentNumber, residentName, packageDescription, carrierName } = req.body;

  // Basic validation
  if (!apartmentNumber || !residentName || !packageDescription || !carrierName) {
    return res.status(400).json({
      message: "All fields are required: apartmentNumber, residentName, packageDescription, carrierName",
    });
  }

  const newPackage = {
    id: packages.length + 1,
    apartmentNumber,
    residentName,
    packageDescription,
    carrierName,
    status: "pending",
    notificationStatus: "pending",
    createdAt: new Date().toISOString(),
  };

  packages.push(newPackage);

  // Simulated notification
  console.log(
    `Notification: Package from ${carrierName} for apartment ${apartmentNumber} (${residentName}) was registered successfully.`
  );

  res.status(201).json({
    message: "Package registered successfully",
    data: newPackage,
  });
};

module.exports = {
  getAllPackages,
  getPackageById,
  updatePackageStatus,
  createPackage,
};