const express = require("express");
const regCtrl = require("../Controller/regCtrl.js");
const router = express.Router();

router.get("/", (req, res) => res.render("home"));
router.get("/login", regCtrl.login);
router.get("/register", (req, res) => res.render("register"));

router.post("/reg/saveReg", regCtrl.regCtrl);
router.post("/reg/login", regCtrl.validate);

// after requiring your controller
router.get("/admin/addCity", regCtrl.renderAddCity);
router.post("/admin/saveCity", regCtrl.saveCity);



module.exports = router;
