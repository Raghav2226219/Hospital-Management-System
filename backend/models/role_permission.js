const { DataTypes } = require('sequelize');
const sequelize = require('../config/mysql');
const Role = require('./role');
const Permission = require('./permission');

const RolePermission = sequelize.define('RolePermission', {
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Role,
            key: 'role_id'
        },
        onDelete: 'CASCADE'
    },
    permission_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Permission,
            key: 'permission_id'
        },
        onDelete: 'CASCADE'
    }
}, {
    tableName: 'role_permissions',
    timestamps: false
});

// Associations
Role.belongsToMany(Permission, { through: RolePermission, foreignKey: 'role_id' });
Permission.belongsToMany(Role, { through: RolePermission, foreignKey: 'permission_id' });

module.exports = RolePermission;
