'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Usuaris', {
            createdAt: {
                allowNull:false,
                type:Sequelize.DATE
            },
            updateAt: {
                allowNull:false,
                type:Sequelize.DATE
            },
            email: {
                primaryKey : true,
                type: Sequelize.STRING,
                isEmail: true
            },
            username: {
                unique: 'user_unic',
                type: Sequelize.STRING
            },
            password: {
                unique: 'pass_unic',
                type: Sequelize.STRING
            },
            birthDate: {
                type: Sequelize.STRING,
                allowNull: false,
                isDate: true,
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: true,
               // notEmpty: true,
            },
            followers: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            following: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            darkMode: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            notificacions: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            estrelles: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            tags: {
                allowNull: true,
                type: Sequelize.STRING
            },
            language: {
                type: Sequelize.STRING,
                allowNull: false,
            }
        }, {
            uniqueKeys: {
                user_unic: {
                    fields: ['username']
                },
                pass_unic: {
                    fields: ['password']
                }
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Usuaris');
    }
};