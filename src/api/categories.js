var express = require('express');
var router = express.Router();
const models = require('../../models');

let cat = require('../services/categories.js')

router.get('/', cat.get_categories);

router.get('/:tagId/', function(req, res, next) {
    // noinspection JSDeprecatedSymbols
    cat.get_activitats(req,res,req.param('tagId'));
});



module.exports = router;