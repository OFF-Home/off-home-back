'use strict';
module.exports = (sequelize,DataTypes) => {
    var DataHoras = sequelize.define('DataHoras', {
        data: {
            allowNull: false,
            type: DataTypes.STRING,
            primaryKey: true,
            isDate: true
        },
        hora: {
            allowNull: false,
            type: DataTypes.STRING,
            primaryKey: true
        }
    });
    return DataHoras;
};