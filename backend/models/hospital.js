const { DataTypes } = require('sequelize');
const sequelize = require('../config/mysql');

const Hospital = sequelize.define('Hospital', {
    hospital_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    hospital_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    location: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    contact_number: {
        type: DataTypes.STRING(20),
        allowNull: true
    }
}, {
    tableName: 'hospitals',
    timestamps: false
});

module.exports = Hospital;
