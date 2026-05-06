const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "mysql://root:PbrTxMEIpQTaZYsfzBfMrXNtwaYenDVs@trolley.proxy.rlwy.net:57183/railway",
  {
    dialect: "mysql",
    logging: false, 
  }
);

module.exports = sequelize;