const models = require('../../models');

exports.get_activitats = function(){
    //models.Activitats.create({ nom: "Correr", description: "algo"});
    const name = "Barcelona";
    models.Llocs.findOne({where: {
            adreca: adress
        }}).then(activitat => {
        if(!activitat) {
            return res.status(400).send({
                message: "No Activity Found with name "+ name
            });
        }
        res.send(activitat)
    });
};

exports.create_activitats = function (req, res, next) {


    models.Llocs.findOne({where: {
                name: req.body.adreca
            }
        }
        ).then(newAct => {
        if (newAct) {
            return res.status(400).send({
                message: "The activity already EXISTS :( "
            });
        }
    });

        models.Llocs.create({
                adreca: req.body.adreca
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