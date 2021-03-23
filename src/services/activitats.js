const models = require('../../models');
//let db = require('../datalayer/activitats.js')

exports.get_activitats = function(req,res,next) {
    /*var list_activitats  = db.get_activitats();
    res.send(list_activitats);*/
    models.Activitats.findAll().then(List_activitat => {
        if(!List_activitat) {
            return res.status(400).send({
                message: "No Activity Found"
            });
        }
        res.send(List_activitat)
    });
}

exports.create_activitats = function(req,res,next) {

    /*var new_activity  = db.create_activitats();
    res.send(new_activity);*/

    /*models.Activitats.findOne({where: {
                titol: req.body.titol
            }
        }
    ).then(newAct => {
        if (newAct) {
            return res.status(400).send({
                message: "The activity already EXISTS :( "
            });
        }
    });*/

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
        data: "dimecres",
        hora: "10am"

    }).then(dat => res.send("okaydat1"))
    models.DataHoras.create({
        data: "dilluns",
        hora: "11am"

    }).then(dat => res.send("okaydat2"))
    models.DataHoras.create({
        data: "dijous",
        hora: "21pm"

    }).then(dat => res.send("okaydat3"))
    models.DataHoras.create({
        data: "dissabte",
        hora: "3pm"

    }).then(dat => res.send("okaydat4"))

    models.Categories.create({
        nom: "correr",
        description: "dimecres"

    }).then(cat => res.send("okaycat"))

    models.Llocs.create({
        carrer: "flor",
        numCarrer: 3,
        maxAssistents: 3,
        latitud: 92272,
        altitud: 92239,

    }).then(loc => res.send("okaylloc"))


    models.Activitats.create({
            usuariCreador: "agnes",
            carrer: "flor",
            numCarrer: 3,
            dataIni: "dimecres",
            horaIni: "10am",
            categoria: "correr",
            maxParticipants: 3,
            titol: "agnes",
            descripcio: "agnes hola",
            dataFi: "dissabte",
            horaFi: "3pm"
        }
    ).then(newAct => {
        
        if (!newAct) {
            return res.status(500).send({
                message: "The activity has NOT been created :( "
            });
        }
        res.send(newAct)
    });
}




