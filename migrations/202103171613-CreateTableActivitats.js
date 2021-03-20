'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Activitats', {
            createdAt: {
                allowNull: false,
                type:Sequelize.DATE
            },
            updateAt: {
                allowNull: false,
                type:Sequelize.DATE
            },
            usuariCreador: {
                type: Sequelize.STRING,
                primaryKey: true,
                references: {
                    model:'Usuaris',
                    key: 'email'
                }
            },
            carrer: {
                allowNull: false,
                type: Sequelize.STRING,
                references: {
                    model:'Llocs',
                    key: 'carrer'
                }
            },
            numCarrer: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Llocs',
                    key: 'numCarrer'
                }
            },
            dataIni: {
                type: Sequelize.STRING,
                primaryKey: true,
                references: {
                    model: 'DataHoras',
                    key: 'data'
                },
                isDate: true
            },
            horaIni: {
                type: Sequelize.STRING,
                primaryKey: true,
                references: {
                    model: 'DataHoras',
                    key: 'hora'
                }
            },
            categoria: {
                type:Sequelize.STRING,
                allowNull: false,
                references: {
                    model: 'Categories',
                    key: 'nom'
                }
            },
            maxParticipants: {
                allowNull: true,
                type: Sequelize.INTEGER,
                max: 20
            },
            titol: {
                allowNull: false,
                type: Sequelize.STRING,
                notEmpty: true
            },
            descripcio: {
                allowNull: false,
                type: Sequelize.TEXT,
                notEmpty: true
            },
            dataFi: {
                allowNull: false,
                type: Sequelize.STRING,
                isDate: true
            },
            horaFi: {
                allowNull: false,
                type: Sequelize.STRING,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Activitats');
    }
};