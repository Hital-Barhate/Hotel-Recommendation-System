const conn = require("../config/db.js");
const type = 'user';

exports.acceptData = (username, useremail, password, contact, callback) => {
  const sql = "INSERT INTO usermaster VALUES (0, ?, ?, ?, ?, ?)";
  conn.query(sql, [username, useremail, password, contact, type], (err, result) => {
    if (err) return callback(err, null);
    return callback(null, "User registered successfully.");
  });
};

exports.whologin = (email, password, type, callback) => {
  const sql = "SELECT * FROM usermaster WHERE useremail = ? AND password = ? AND type = ?";
  conn.query(sql, [email, password, type], (err, result) => {
    if (err) return callback(err, null);
    return callback(null, result);
  });
};


exports.insertCity = (city_id, city_name, pincode, callback) => {
  const sql = "INSERT INTO citymaster (city_id, city_name, pincode) VALUES (?, ?, ?)";
  conn.query(sql, [city_id, city_name, pincode], callback);
};
