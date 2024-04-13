const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/connection"); // Assuming 'db/connection.js' sets up and exports a Sequelize instance

class Form extends Model {}

Form.init(
	{
		data: {
			type: DataTypes.JSON, // Using JSON data type for flexible data similar to 'Mixed' in Mongoose
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: "Form",
	}
);

module.exports = Form;
