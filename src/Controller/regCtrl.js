const regmodel = require("../models/regmodel.js");

// Show login page
exports.login = (req, res) => {
  res.render("login.ejs", { msg: "" });
};

// Register a normal user with type='user'
exports.regCtrl = (req, res) => {
  const { username, useremail, password, contact } = req.body;

  regmodel.acceptData(username, useremail, password, contact, (err, resultMsg) => {
    if (err) {
      console.error("Insert failed:", err);
      return res.render("register", { msg: "Registration failed." });
    }
    return res.render("register", { msg: resultMsg });
  });
};

// Login with DB + hardcoded admin check
exports.validate = (req, res) => {
  const { email, password, type } = req.body;

  // ✅ 1) If hardcoded admin, skip DB check:
  if (email === "admin@gmail.com" && password === "admin" && type === "admin") {
    req.session.user_id = 0; // optional
    return res.render("admindash");
  }

  // ✅ 2) Else check normal user in DB:
  regmodel.whologin(email, password, type, (err, result) => {
    if (err) {
      console.error("DB error:", err);
      return res.render("login", { msg: "Something went wrong." });
    }

    if (result.length > 0) {
      req.session.user_id = result[0].user_id;
      return res.render("userdashboard");
    } else {
      return res.render("login", { msg: "Invalid email, password, or role." });
    }
  });
};

// ✅ in your regCtrl.js
const cityModel = require("../models/regmodel");

exports.renderAddCity = (req, res) => {
  res.render("city"); // your addCity.ejs file
};

exports.saveCity = (req, res) => {
  const { city_id, city_name, pincode } = req.body;
  cityModel.insertCity(city_id, city_name, pincode, (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Error saving city");
    }
    res.redirect("/admin/addCity");
  });
};
