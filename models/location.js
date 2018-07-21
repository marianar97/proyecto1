var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


var LocationSchema = mongoose.Schema({
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    latitud: {
        type: String
    },
    longitud: {
        type: String
    }
});

var Location = module.exports = mongoose.model('Location', LocationSchema);