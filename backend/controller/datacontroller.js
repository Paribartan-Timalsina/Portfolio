const Project = require("../schema/projectSchema");

// Get all projects
exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json({
            success: true,
            data: projects
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
};

// Post a new project (with file upload)
exports.postProject = async (req, res) => {
    try {
        console.log("POST request received");

        const { projectName, description, githubLink } = req.body;

        // Ensure an image file is uploaded
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Image file is required"
            });
        }

        const image = req.file.path; // Get uploaded file path

        // Validate required fields
        if (!projectName || !description || !githubLink) {
            return res.status(400).json({
                success: false,
                message: "All fields (projectName, description, githubLink) are required"
            });
        }

        // Create and save project
        const newProject = await Project.create({
            projectName,
            description,
            githubLink,
            image
        });

        res.status(201).json({
            success: true,
            message: "Project created successfully",
            data: newProject
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Bad Request",
            error: error.message
        });
    }
};
