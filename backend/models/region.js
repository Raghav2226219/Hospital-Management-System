const { DataTypes } = require('sequelize');
const sequelize = require('../config/mysql');
const State = require('./state');
const User = require('./user');

const Region = sequelize.define('Region', {
    region_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    region_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            isIn: [['North', 'South', 'East', 'West']] // Only allows these four values
        }
    },
    state_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: State,
            key: 'state_id'
        }
    }
}, {
    tableName: 'regions',
    timestamps: false
});

State.hasMany(Region, { foreignKey: 'state_id' });
Region.belongsTo(State, { foreignKey: 'state_id' });
Region.hasMany(User, { foreignKey: 'region_id' });
User.belongsTo(Region, { foreignKey: 'region_id' });

module.exports = Region;
