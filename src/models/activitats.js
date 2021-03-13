
exports.get_activitats = function(){
    return [
        {
            title: 'Caminada a la llum de la lluna',
            city: 'Mollerussa',
            assistents: 5,
            maxAsis: 25,
            categoria: 'Caminar',
        },
        ];


}
var mongoose = require('mongoose');

var activitatsDB = mongoose.Schema({
    title: String,
    city: String,
    categoria: String,
})

module.exports = mongoose.model('ActivitatsPost', activitatsDB);

//agnes github token hahhaah   8c2658ae0f7fc1545a031d7e0faa29fbb3000451
// mongodb+srv://backend:backend2021@cluster0.1qpev.mongodb.net/myFirstDatabase?retryWrites=true&w=majority