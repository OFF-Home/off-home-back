var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {

  models.Llocs.findAll().then(llocs => {
    console.log(llocs);
    res.send(llocs)});

});

module.exports = router;

