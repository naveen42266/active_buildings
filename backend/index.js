require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectToDatabase } = require("./db");
const inventoryRoutes = require("./routes/inventoryRoutes");
const { PORT, ALLOWED_ORIGINS } = require("./config");

const app = express();

// CORS configuration
app.use(cors({
  origin: ALLOWED_ORIGINS,
  methods: ["POST", "PUT", "GET", "DELETE"],
  credentials: true,
}));

app.use(express.json()); // Middleware for parsing JSON

// Register routes

app.use('/api/inventory', inventoryRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Hello");
});

// Start server and connect to database
app.listen(PORT, async () => {
  await connectToDatabase();
  console.log(`Server is running on port ${PORT}`);
});
