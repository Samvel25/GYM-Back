require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Form = require("./src/models/Form"); // Ensure this path matches your project structure
const sequelize = require("./src/db/connection");

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Connect to MySQL
sequelize
	.authenticate()
	.then(() => {
		console.log("MySQL connected");
		sequelize.sync(); // Ensure all models are synchronized with the database
	})
	.catch((err) => console.error("MySQL connection error:", err));

// Route to handle form submission
app.post("/submit-form", async (req, res) => {
	console.log("Received form data:", req.body);
	try {
		const formData = await Form.create({ data: req.body });
		console.log("Saved data:", formData);
		res
			.status(200)
			.json({ message: "Form data saved successfully", data: formData });
	} catch (error) {
		console.error("Error saving data:", error);
		res.status(500).json({ error: error.message });
	}
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
