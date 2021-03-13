'use strict';
const Sequelize = require('sequelize');
module.exports = (sequelize,DataTypes) => {
        var Llocs = sequelize.define('Llocs', {
            adreca: {
                primaryKey : true,
                type: DataTypes.STRING
            },
        });
    return Llocs;
};