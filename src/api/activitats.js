var express = require('express');
var router = express.Router();
var actDB = require('../models/activitats');

let activity = require('../services/activitats.js')
/* GET home page. */
//router.get('/', activity.get_activitats);

router.post('/', async (req,res) => {

    const newActivity = new actDB({
        title: req.body.title,
        city: req.body.city,
        categoria: req.body.categoria
    });
    const Activity = await newActivity.save()
    res.json(Activity);
});


module.exports = router;