var express = require('express');
var router = express.Router();

const UC = require('../controller/UserCont')

router.post('/Singupdata',UC.Singupdata)
router.post('/Logindata',UC.Logindata)

module.exports = router;
