const bcrypt = require('bcryptjs');

exports.regCtrl = (req, res) => {
  res.render('register');  // render register.ejs
};

exports.saveReg = (req, res) => {
  const { id, name, email, password, contact } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  console.log('Hashed:', hashedPassword);
  res.send('Registration successful!');
};
