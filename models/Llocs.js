'use strict';
module.exports = (sequelize,DataTypes) => {
        var Llocs = sequelize.define('Llocs', {
            carreriNum: {
                primaryKey: true,
                type: DataTypes.STRING
            },
            maxAssistents: {
                type: DataTypes.INTEGER
            },
            latitud: {
                type: DataTypes.INTEGER,
                //unique: 'actions_unique',
                allowNull: false
            },
            altitud: {
                type: DataTypes.INTEGER,
                // unique: 'actions_unique',
                allowNull: false
            }
        })/*{
            indexes: [
                {
                    unique: true,
                    fields: ['latitud','altitud']
                }
            ]*/


    return Llocs;
};