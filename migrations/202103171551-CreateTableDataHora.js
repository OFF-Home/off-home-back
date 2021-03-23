'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('DataHoras', {
            createdAt: {
                allowNull: false,
                type:Sequelize.DATE
            },
            updateAt: {
                allowNull: false,
                type:Sequelize.DATE
            },
            data: {
                allowNull: false,
                type: Sequelize.STRING,
                primaryKey: true,
                //isDate: true
            },
            hora: {
                allowNull: false,
                type: Sequelize.STRING,
                primaryKey: true
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('DataHoras');
    }
};