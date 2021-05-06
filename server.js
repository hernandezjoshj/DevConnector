// entry file

// bringing in express
const express = require("express");
const connectDB = require("./config/db");

// initialize app with express
const app = express();

// connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

// get request, callback with request/response
app.get("/", (req, res) => res.send("API Running"));

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

// looks for port, but sets to 5000 as default
const PORT = process.env.PORT || 5000;

// taking the app to listen on a port, with callback to print text
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
