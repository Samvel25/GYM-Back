const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.MYSQL_URI, {
	dialect: "mysql",
	logging: false, // This turns off SQL logging in the console, set to console.log for debugging
});

module.exports = sequelize;
