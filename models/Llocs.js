'use strict';
module.exports = (sequelize,DataTypes) => {
        var Llocs = sequelize.define('Llocs', {
            carrer: {
                primaryKey: true,
                type: DataTypes.STRING
            },
            numCarrer: {
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            maxAssistents: {
                type: DataTypes.INTEGER
            },
            latitud: {
                type: DataTypes.BIGINT,
                unique: 'actions_unique',
                allowNull: false
            },
            altitud: {
                type: DataTypes.BIGINT,
                unique: 'actions_unique',
                allowNull: false
            }
        }, {
            indexes: [
                {
                    unique: true,
                    fields: ['latitud','altitud']
                }
            ]

        });
    return Llocs;
};