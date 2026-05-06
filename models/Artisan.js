const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Specialite = require("./Specialite");

const Artisan = sequelize.define("Artisan", {
  nom: DataTypes.STRING,
  note: DataTypes.FLOAT,
  localisation: DataTypes.STRING,
  description: DataTypes.TEXT,
  email: DataTypes.STRING,
  site_web: DataTypes.STRING,
  image: DataTypes.STRING,
  top_artisan: DataTypes.BOOLEAN,
});

Artisan.belongsTo(Specialite, { foreignKey: "id_specialite" });
Specialite.hasMany(Artisan, { foreignKey: "id_specialite" });

module.exports = Artisan;
