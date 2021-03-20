'use strict';
module.exports = (sequelize,DataTypes) => {
    var Usuaris = sequelize.define('Usuaris', {
        email: {
            primaryKey: true,
            type: DataTypes.STRING,
            isEmail: true
        },
        username: {
            unique: 'user_unic',
            type: DataTypes.STRING
        },
        password: {
            unique: 'pass_unic',
            type: DataTypes.STRING
        },
        birthDate: {
            type: DataTypes.STRING,
            allowNull: false,
            isDate: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,

        },
        followers: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        following: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        darkMode: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        notificacions: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        estrelles: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tags: {
            allowNull: true,
            type: DataTypes.STRING
        },
        language: {
            type: DataTypes.STRING,
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
    return Usuaris;
};