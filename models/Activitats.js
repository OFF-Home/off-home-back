'use strict';
module.exports = (sequelize,DataTypes) => {
    var Activitats = sequelize.define('Activitats', {
        usuariCreador: {
            type: DataTypes.STRING,
            primaryKey: true,

        },
        carrer: {
            allowNull: false,
            type: DataTypes.STRING,

        },
        numCarrer: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        dataIni: {
            type: DataTypes.STRING,
            //primaryKey: true,

            //isDate: true
        },
        horaIni: {
            type: DataTypes.STRING,

        },
        categoria: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        maxParticipants: {
            allowNull: true,
            type: DataTypes.INTEGER,
            max: 20
        },
        titol: {
            allowNull: false,
            type: DataTypes.STRING,
            notEmpty: true
        },
        descripcio: {
            allowNull: false,
            type: DataTypes.TEXT,
            notEmpty: true
        },
        dataFi: {
            allowNull: false,
            type: DataTypes.STRING,
            //isDate: true
        },
        horaFi: {
            allowNull: false,
            type: DataTypes.STRING,

        }
    });
    return Activitats;
};