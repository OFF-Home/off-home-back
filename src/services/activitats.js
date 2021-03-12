let db = require('../models/activitats.js')

exports.get_activitats = function(req, res, next) {
    var list_activitats  = db.get_activitats();
    res.send(list_activitats)};