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

exports.addHotel = (req, res) => {
  const { hotel_id, hotel_name, hotel_address, city_id, area_id, hotel_email, hotel_contact } = req.body;
  regmodel.addHotel({ hotel_id, hotel_name, hotel_address, city_id, area_id, hotel_email, hotel_contact }, (err) => {
    if (err) return res.send("DB Error: " + err);
    res.redirect("/admindash");  // match your route
  });
};

exports.getHotels = (req, res) => {
  regmodel.getHotels((err, rows) => {
    if (err) return res.json([]);
    res.json(rows);
  });
};

exports.deleteHotel = (req, res) => {
  regmodel.deleteHotel(req.params.id, (err) => {
    if (err) return res.json({ message: "Error" });
    res.json({ message: "Deleted" });
  });
};
