const bcrypt = require('bcryptjs');
const UserModel = require('../models/usermodel.js'); // import model

exports.regCtrl = (req, res) => {
  res.render('register');
};

exports.saveReg = (req, res) => {
  const { id, name, email, password, contact, type } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);

  const userData = { id, name, email, hashedPassword, contact, type };

  UserModel.saveUser(userData, (err, result) => {
    if (err) {
      console.error('Error inserting user:', err);
      return res.status(500).send('Error saving user to database');
    }
    console.log('User registered:', result);
    res.send('Registration successful!');
  });
};
