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

exports.addHotel = (data, callback) => {
  const sql = "INSERT INTO hotelmaster VALUES (?, ?, ?, ?, ?, ?, ?)";
  conn.query(sql, [
    data.hotel_id,
    data.hotel_name,
    data.hotel_address,
    data.city_id,
    data.area_id,
    data.hotel_email,
    data.hotel_contact
  ], callback);
};

exports.getHotels = (callback) => {
  conn.query("SELECT hotel_id, hotel_name FROM hotelmaster", callback);
};

exports.deleteHotel = (id, callback) => {
  conn.query("DELETE FROM hotelmaster WHERE hotel_id = ?", [id], callback);
};
