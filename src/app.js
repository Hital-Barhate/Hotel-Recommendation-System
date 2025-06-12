const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// ✅ Serve static files from "public" directory
app.use(express.static(path.join(__dirname, "..", "public")));

// ✅ Set EJS as view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));

// ✅ Routes
app.use("/reg", require("./routes/regroutes"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get('/login', (req, res) => {
  res.render('login'); // make sure login.ejs exists inside views/
});



app.get('/register', (req, res) => {
    res.render('register.ejs'); // Make sure register.ejs exists inside your views folder
});


module.exports = app;
