const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const path = require("path");

const regRoutes = require("./routes/regroutes");

const app = express();

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));

// Static files
app.use(express.static(path.join(__dirname, "..", "public")));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: true,
  })
);

// ✅ Mount single router
app.use("/", regRoutes);

module.exports = app;
