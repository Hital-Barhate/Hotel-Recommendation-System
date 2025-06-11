const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './views');

// Register Route
app.use('/reg', require('./routes/regroutes.js'));

// Home page
app.get('/', (req, res) => {
  res.render('home');
});

module.exports = app;
