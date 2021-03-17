'use strict';
const Sequelize = require('sequelize');
module.exports = (sequelize,DataTypes) => {
    var Categories = sequelize.define('Categories', {
        nom: {
            primaryKey : true,
            type: DataTypes.STRING
        },
        description: {
            primaryKey : false,
            type: DataTypes.STRING
        },

    });
    return Categories;
};