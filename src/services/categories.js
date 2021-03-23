
let db = require('../datalayer/categories.js')

exports.get_categories = function(req,res,next) {
    var categories_db  = db.get_categories();
    res.send(categories_db)};
