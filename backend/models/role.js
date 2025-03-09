const { DataTypes } = require('sequelize');
const sequelize = require('../config/mysql');
const User = require('./user');
const Permission = require('./permission');
const RolePermission = require('./role_permission');
const UserRole = require('./user_role');

const Role = sequelize.define('Role', {
    role_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    role_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    }
}, {
    tableName: 'roles',
    timestamps: false
});

// Associations
Role.belongsToMany(Permission, { through: RolePermission, foreignKey: 'role_id' });
Role.belongsToMany(User, { through: UserRole, foreignKey: 'role_id' });

module.exports = Role;
