const express = require("express");
const regCtrl = require("../controller/regCtrl");
const router = express.Router();

router.get("/", (req, res) => res.render("home"));
router.get("/login", regCtrl.login);
router.get("/register", (req, res) => res.render("register"));

router.post("/reg/saveReg", regCtrl.regCtrl);
router.post("/reg/login", regCtrl.validate);

router.post("/admin/addHotel", regCtrl.addHotel);
router.get("/admin/getHotels", regCtrl.getHotels);
router.delete("/admin/deleteHotel/:id", regCtrl.deleteHotel);


module.exports = router;
