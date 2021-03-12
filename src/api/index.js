var express = require('express');
var router = express.Router();


let index = require('../services/index.js')
/* GET home page. */
router.get('/', index.get_categories);



module.exports = router;
