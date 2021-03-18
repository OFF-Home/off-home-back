
let db = require('../dbmodels/DBactivitat.js')

exports.get_activitats = function(req,res,next) {
    var list_activitats  = db.get_activitats();
    res.send(list_activitats)
}

exports.create_activitats = function(req,res,next) {
    var new_activity  = db.create_activitats();
    res.send(new_activity)
}




