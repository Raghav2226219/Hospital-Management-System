const { DataTypes } = require('sequelize');
const sequelize = require('../config/mysql');
const Hospital = require('./hospital');
const HospitalDepartment = require('./hospital_department');

const Department = sequelize.define('Department', {
    department_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    department_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    }
}, {
    tableName: 'departments',
    timestamps: false
});

// Associations
Department.belongsToMany(Hospital, { through: HospitalDepartment, foreignKey: 'department_id' });

module.exports = Department;
