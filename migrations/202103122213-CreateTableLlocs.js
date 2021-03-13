'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Llocs', {
            createdAt: {
                allowNull:false,
                type:Sequelize.Date
            },
            updateAt: {
                allowNull:false,
                type:Sequelize.Date
            },
            adreca: {
                primaryKey : true,
                type: Sequelize.STRING
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Llocs');
    }
};