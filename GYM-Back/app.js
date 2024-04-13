require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const Form = require("./src/models/Form"); // Ensure this path matches your project structure

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose
	.connect(process.env.MONGODB_URI, {})
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.error("MongoDB connection error:", err));

// Route to handle form submission
app.post("/submit-form", async (req, res) => {
	console.log("Received form data:", req.body);
	try {
		const formData = new Form({ data: req.body });
		const savedData = await formData.save();
		console.log("Saved data:", savedData);
		res
			.status(200)
			.json({ message: "Form data saved successfully", data: savedData });
	} catch (error) {
		console.error("Error saving data:", error);
		res.status(500).json({ error: error.message });
	}
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
