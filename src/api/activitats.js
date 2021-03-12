var express = require('express');
var router = express.Router();


let activity = require('../services/activitats.js')
/* GET home page. */
router.get('/', activity.get_activitats);



module.exports = router;