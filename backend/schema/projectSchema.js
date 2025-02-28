const mongoose = require("mongoose");

// Define Schema
const projectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    githubLink: {
        type: String,
        required: true,
    }
});

// Export Model
module.exports = mongoose.model("Project", projectSchema);
