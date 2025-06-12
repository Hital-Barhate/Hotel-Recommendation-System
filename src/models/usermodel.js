const conn = require('../config/db');

const UserModel = {
  saveUser: (userData, callback) => {
    const { id, name, email, hashedPassword, contact, type } = userData;
    const sql = `
      INSERT INTO usermaster (user_id, username, useremail, password, contact, type)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    conn.query(sql, [id, name, email, hashedPassword, contact, type], (err, result) => {
      callback(err, result);
    });
  }
};

module.exports = UserModel;
