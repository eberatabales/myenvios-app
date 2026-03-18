const express = require("express");
const app = express();

app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("MyEnvios API running 🚀");
});

// Registrar paquete (Fase 1)
app.post("/package", (req, res) => {
  const { apartmentNumber, residentName } = req.body;

  res.json({
    message: "Package registered successfully",
    data: { apartmentNumber, residentName }
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});