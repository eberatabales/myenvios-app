const packages = require("../data/packages");

// GET /packages
const getAllPackages = (req, res) => {
  res.status(200).json({
    message: "Packages retrieved successfully",
    total: packages.length,
    data: packages,
  });
};

// POST /package
const createPackage = (req, res) => {
  const { apartmentNumber, residentName, packageDescription } = req.body;

  // Basic validation
  if (!apartmentNumber || !residentName || !packageDescription) {
    return res.status(400).json({
      message: "All fields are required: apartmentNumber, residentName, packageDescription",
    });
  }

  const newPackage = {
    id: packages.length + 1,
    apartmentNumber,
    residentName,
    packageDescription,
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  packages.push(newPackage);

  // Simulated notification
  console.log(
    `Notification: Package for apartment ${apartmentNumber} (${residentName}) was registered successfully.`
  );

  res.status(201).json({
    message: "Package registered successfully",
    data: newPackage,
  });
};

module.exports = {
  getAllPackages,
  createPackage,
};