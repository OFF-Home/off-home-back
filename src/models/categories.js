const models = require('../../models');
const res = require("express/lib/response");

exports.get_categories = function () {
    //const newCat = models.Categories.create({nom: "Correr", description: "algo"});
    /*models.Categories.findAll().then(categories => {
        var list_of_categories = {
            categories: []
        };

        for (var i in categories) {

            var item = categories[i];

            list_of_categories.categories.push({
                "nom": item.nom,
                "description": item.description
            });
        }
        res.send(list_of_categories)
    });
    */


    //return [{nom: "Caminar", description:"caminar molt"}];
};


