'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Llocs', {
            createdAt: {
                allowNull:false,
                type:Sequelize.DATE
            },
            updateAt: {
                allowNull:false,
                type:Sequelize.DATE
            },
            carreriNum: {
                primaryKey : true,
                type: Sequelize.STRING
            },
            maxAssistents: {
                type: Sequelize.INTEGER
            },
            latitud: {
                type: Sequelize.BIGINT,
                unique: 'actions_unique',
                allowNull: false
            },
            altitud: {
                type: Sequelize.BIGINT,
                unique: 'actions_unique',
                allowNull: false
            }
        }, {
            uniqueKeys: {
                action_unique: {
                    fields:['latitud','altitud']
                }
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Llocs');
    }
};