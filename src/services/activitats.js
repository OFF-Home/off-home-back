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
    }).then(usu => console.log("usuariCreat"))

    models.Categories.create({
        nom: "correr",
        description: "dimecres"

    }).then(cat => console.log("CategoriaCreada"))

    models.Llocs.create({
        carreriNum: "flor3",
        maxAssistents: 3,
        latitud: 92272,
        altitud: 92239,

    }).then(loc => console.log("llocCreat"))


    models.Activitats.create({
            usuariCreador: "agnes@gmail.com",
            carreriNum: "flor3",
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




