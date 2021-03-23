'use strict';
module.exports = (sequelize,DataTypes) => {
    var Activitats = sequelize.define('Activitats', {
        usuariCreador: {
            type: DataTypes.STRING,
            primaryKey: true,
            references: {
                model:'Usuaris',
                key: 'email'
            }

        },
        carreriNum: {
            allowNull: false,
            type: DataTypes.STRING,
            references: {
                model:'Llocs',
                key: 'carreriNum'
            }

        },
        dataIni: {
            type: DataTypes.STRING,
            //isDate: true
        },
        horaIni: {
            type: DataTypes.STRING,

        },
        categoria: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'Categories',
                key: 'nom'
            }

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