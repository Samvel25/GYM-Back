const mongoose = require("mongoose");

const formDataSchema = new mongoose.Schema({
	data: mongoose.Schema.Types.Mixed, // 'Mixed' type for a flexible object
});

const Form = mongoose.model("Form", formDataSchema);

module.exports = Form;
