'use strict';
const Sequelize = require('sequelize');
module.exports = (sequelize,DataTypes) => {
    var Categories = sequelize.define('Categories', {
        nom: {
            primaryKey : true,
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },

    });
    return Categories;
};