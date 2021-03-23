var express = require('express');
var router = express.Router();
const activitats = require("../services/activitats.js");

/* GET home page. */
router.get('/', activitats.get_activitats);

router.post('/create/:usuariCreador', activitats.create_activitats);

module.exports = router;