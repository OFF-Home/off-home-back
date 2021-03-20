
let db = require('../models/categories.js')
const models = require('../../models');

exports.get_categories = function(req,res,next) {
    models.Categories.create({nom: "Correr", description: "algo"}).then(categories => res.send('OK'));
    models.Categories.findAll().then(categories => {
            res.json(categories)
        }
    );
};



exports.get_activitats = function(req,res,nom_categoria) {
    /*
    models.Categories.create({nom: "Correr", description: "algo"}).then(categories => res.send('OK'));
    models.DataHoras.create({
        data: "dimecres",
        hora: "dimecres"

    }).then(dat => res.send("okay"));

    models.Usuaris.create({
        email: "agnes@gmail.com",
        username: "agnes",
        password: "agnes",
        birthDate: "20/4/2000",
        description: "agnes",
        followers: 3,
        following: 3,
        darkMode: 3,
        notificacions: 3,
        estrelles: 3,
        tags: "agnes",
        language: "agnes"
    }).then(usu => res.send("okay"));
    models.Activitats.create({
            usuariCreador: "agnes",
            carrer: "agnes",
            numCarrer: "agnes",
            dataIni: "dimecres",
            horaIni: "dimecres",
            categoria: "Correr",
            maxParticipants: "agnes",
            titol: "agnes",
            descripcio: "agnes",
            dataFi: "agnes",
            horaFi: "agnes"
        }
    ).then(newAct => {
        if (!newAct) {
            return res.status(500).send({
                message: "The activity has NOT been created :frowning: "
            });
        }
        res.send('OK')
    });
    models.Activitats.findAll({
        where: {
            categoria: nom_categoria
        }
    }).then(activitats => {
        res.json(activitats)
        }
    );*/
    res.send(nom_categoria) //TODO això es un dummy
};
