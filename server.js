const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const path = require("path");
//rest object
const app = express();
// const userRouters = require("./routes/userRouters.js");
dotenv.config();

// static files
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//mongodb connection
connectDB();

//middleware
app.use(express.json());
app.use(moragan("dev"));

//routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));
// port
const port = process.env.port || 8080;
//listen port
app.listen(port, () => {
  console.log(
    `server Running in ${process.env.NODE_MODE}Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
