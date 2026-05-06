const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");

const app = express();

app.use(cors());
app.use(express.json());

const artisanRoutes = require("./routes/artisan.routes");
app.use("/api/artisans", artisanRoutes);

sequelize.sync().then(() => {
  console.log("DB connected");
  app.listen(3000, () => console.log("Server running on port 3000"));
});
