var express = require('express');
var router = express.Router();
const activitats = require("../services/activitats.js");

/* GET home page. */
router.get('/get', activitats.get_activitats);

router.post('/create', activitats.create_activitats);