const models = require('../../models');

exports.regUser = function(res,req,next) {
    return models.Usuaris.create({
        email: req.body.email,
        username: req.params.username,
        password: req.body.password,
        birthDate: req.body.birthDate,
        description: req.body.description,
        followers: req.body.followers,
        following: req.body.following,
        darkMode: req.body.darkmode,
        notificacions: req.body.notificacions,
        estrelles: req.body.estrelles,
        tags: req.body.tags,
        language: req.body.language
    }).then(user => {
        res.send('OK');
    }).catch(function(err) {
        res.json({
            status: err.status,
            message: err.message,
            stack: err.stack
        })
    })
}