var express = require('express');
var router = express.Router();
const models = require('../../models');

let cat = require('../services/categories.js')

router.get('/', cat.get_categories);

module.exports = router;