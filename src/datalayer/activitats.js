const models = require('../../models');

exports.get_activitats = function(){
    //models.Activitats.create({ nom: "Correr", description: "algo"});
    /*models.Activitats.findAll().then(List_activitat => {
        if(!List_activitat) {
            return res.status(400).send({
                message: "No Activity Found"
            });
        }
        res.send(List_activitat)
    });*/
};

exports.create_activitats = function (req, res, next) {

/*
    models.Activitats.findOne({where: {
                titol: req.body.titol
            }
        }
        ).then(newAct => {
        if (newAct) {
            return res.status(400).send({
                message: "The activity already EXISTS :( "
            });
        }
    });

        models.Activitats.create({
                usuariCreador: req.body.usuariCreador,
                carrer: req.body.carrer,
                numCarrer: req.body.numCarrer,
                dataIni: req.body.dataIni,
                horaIni: req.body.horaIni,
                categoria: req.body.categoria,
                maxParticipants: req.body.maxParticipants,
                titol: req.body.titol,
                descripcio: req.body.descripcio,
                dataFi: req.body.dataFi,
                horaFi: req.body.horaFi
            }
        ).then(newAct => {
            if (!newAct) {
                return res.status(500).send({
                    message: "The activity has NOT been created :( "
                });
            }
            res.send(newAct)
        });
*/
    }