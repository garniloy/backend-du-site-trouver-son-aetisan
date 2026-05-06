require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");

const app = express();

app.use(cors());
app.use(express.json());

const artisanRoutes = require("./routes/artisan.routes");
app.use("/api/artisans", artisanRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  console.log("DB connected");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

