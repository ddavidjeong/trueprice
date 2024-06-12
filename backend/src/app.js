const express = require("express");
const dotenv = require("dotenv");
const { sequelize } = require("./src/models");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
const routes = require("./src/routes");
app.use("/api", routes);

const PORT = process.env.PORT || 5000;

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  })
  .catch((err) => {
    console.error(
      "Unable to connect to the database:",
      err
    );
  });
