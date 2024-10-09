const express = require("express");
const dotenv = require("dotenv");
const cors=require("cors")
dotenv.config({ path: "config/config.env" });
const app = express();
const connectDatabase = require("./config/database");
const cookieParser = require("cookie-parser");
const dataRoutes = require("./routes/dataroutes");
// Enable CORS for all origins
app.use(cors());
// Handling uncaught exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting Down Server due to Unhandled Exception");
    process.exit(1);
});
// Serve static files from the uploads directory
app.use('/uploads', express.static((__dirname,"uploads")));
// Connect to the database
connectDatabase();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use("/mydata", dataRoutes);

// Start the server
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting Down Server due to Unhandled Promise Rejection");
    server.close(() => {
        process.exit(1);
    });
});
