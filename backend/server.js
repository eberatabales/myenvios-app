const express = require("express");
const app = express();

const packageRoutes = require("./routes/packageRoutes");

app.use(express.json());

// Main test route
app.get("/", (req, res) => {
  res.send("MyEnvios backend is running");
});

// Package routes
app.use("/", packageRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});