const express = require("express");
const dotenv = require("dotenv");
const { sequelize } = require("./models");
const fireblocksRoutes = require("./routes/fireblocks");

dotenv.config();

const app = express();

app.use(express.json());

// Routes
app.use("/fireblocks", fireblocksRoutes);

// Test Database Connection
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database connected!");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
