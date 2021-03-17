

let db = require('../models/categories.js')

exports.get_categories = function(req,res,next) {
    var list_categories  = db.get_categories();
    res.send(list_categories)};