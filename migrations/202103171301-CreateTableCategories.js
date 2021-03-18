'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Categories', {
            createdAt: {
                allowNull:false,
                type:Sequelize.Date
            },
            updateAt: {
                allowNull:false,
                type:Sequelize.Date
            },
            nom: {
                primaryKey : true,
                type: Sequelize.STRING
            },
            description: {
                allowNull:false,
                type: Sequelize.STRING
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Llocs');
    }
};