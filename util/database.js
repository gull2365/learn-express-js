const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "051101", {
  dialect: "mysql",
  host: "localhost",
}); // schema, username, password, options

module.exports = sequelize;
