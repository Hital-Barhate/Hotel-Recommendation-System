let express = require('express');
let router = express.Router();
let controller = require('../Controller/regCtrl.js');

router.get('/', controller.regCtrl);                // handles GET /reg
router.post('/saveReg', controller.saveReg);         // handles POST /reg/saveReg

module.exports = router;
