const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, "appointments.json");

// Middleware
app.use(express.json());

// Routes
app.get("/api/appointments", (req, res) => {
  fs.readFile(DATA_FILE, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read data" });
    }
    res.json(JSON.parse(data || "[]"));
  });
});

app.post("/api/appointments", (req, res) => {
  const newAppointment = req.body;

  fs.readFile(DATA_FILE, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read data" });
    }

    const appointments = JSON.parse(data || "[]");
    appointments.push(newAppointment);

    fs.writeFile(DATA_FILE, JSON.stringify(appointments, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: "Failed to save data" });
      }
      res.status(201).json(newAppointment);
    });
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
