const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Categorie = require("./Categorie");

const Specialite = sequelize.define("Specialite", {
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Specialite.belongsTo(Categorie, { foreignKey: "id_categorie" });
Categorie.hasMany(Specialite, { foreignKey: "id_categorie" });

module.exports = Specialite;
