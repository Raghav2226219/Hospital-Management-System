const { DataTypes } = require('sequelize');
const sequelize = require('../config/mysql');
const User = require('./user');
const Role = require('./role');

const UserRole = sequelize.define('UserRole', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'user_id'
        },
        onDelete: 'CASCADE'
    },
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Role,
            key: 'role_id'
        },
        onDelete: 'CASCADE'
    }
}, {
    tableName: 'user_roles',
    timestamps: false
});

// Associations
User.belongsToMany(Role, { through: UserRole, foreignKey: 'user_id' });
Role.belongsToMany(User, { through: UserRole, foreignKey: 'role_id' });

module.exports = UserRole;
