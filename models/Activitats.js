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
        carrer: {
            allowNull: false,
            type: DataTypes.STRING,
            references: {
                model:'Llocs',
                key: 'carrer'
            }
        },
        numCarrer: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'Llocs',
                key: 'numCarrer'
            }
        },
        dataIni: {
            type: DataTypes.STRING,
            primaryKey: true,
            references: {
                model: 'DataHoras',
                key: 'data'
            },
            isDate: true
        },
        horaIni: {
            type: DataTypes.STRING,
            primaryKey: true,
            references: {
                model: 'DataHoras',
                key: 'hora'
            }
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
            isDate: true
        },
        horaFi: {
            allowNull: false,
            type: DataTypes.STRING,
        }
    });
    return Activitats;
};