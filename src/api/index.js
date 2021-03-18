var express = require('express');
var router = express.Router();
const activitats = require("../services/activitat");

/* GET home page. */
router.get('/', activitats.get_activitats);

router.post('/create', activitats.create_activitats);

module.exports = router;
