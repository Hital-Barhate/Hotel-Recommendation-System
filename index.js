let express = require("express");
let app = require("./src/app");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server Started on port", PORT);
});
