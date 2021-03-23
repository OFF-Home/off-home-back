
let db = require('../models/categories.js')
const models = require('../../models');

exports.get_categories = function(req,res,next) {
    models.Categories.create({nom: "Nadar", description: "algo"}).then(categories => res.send('OK'));
    models.Categories.findAll().then(categories => {
            res.json(categories)
        }
    );
};



exports.get_activitats = function(req,res,nom_categoria) {

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
    }).then(usu => res.send("okayusu"))

    models.DataHoras.create({
        data: "27/12/2022",
        hora: "14:00"

    }).then(dat => res.send("okaydat"))

    models.Categories.create({
        nom: "correr",
        description: "dimecres"

    }).then(cat => res.send("okaycat"))

    models.Llocs.create({
        carrer: "correr",
        numCarrer: 3,
        maxAssistents: 3,
        latitud: 9223372036854775807,
        altitud: 9223372036854775806,

    }).then(loc => res.send("okaylloc"))


    models.Activitats.create({
            usuariCreador: "agnes@gmail.com",
            carrer: "correr",
            numCarrer: 3,
            dataIni: "27/12/2022",
            horaIni: "14:00",
            categoria: "correr",
            maxParticipants: "agnes",
            titol: "agnes",
            descripcio: "agnes",
            dataFi: "agnes",
            horaFi: "agnes"
        }
    ).then(newAct => {
        if (!newAct) {
            return res.status(500).send({
                message: "The activity has NOT been created  "
            });
        }
        res.send("okayACT")
    });

    models.Activitats.findAll({
        where: {
            categoria: nom_categoria
        }
    }).then(activitats => {
        res.json(activitats)
        }
        );
    //res.send(nom_categoria) //TODO això es un dummy
};
