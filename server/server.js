const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extendedd: false }));

// add the user routes
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

// start the server app
app.listen(port, () => console.log(`Server started on port ${port}`));
