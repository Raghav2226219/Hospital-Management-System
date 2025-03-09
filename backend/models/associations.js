// models/associations.js

const User = require("./user");
const Region = require("./region");
const Role = require("./role");
const UserRole = require("./user_role");

// User belongs to Region
User.belongsTo(Region, { foreignKey: "region_id" });

// User has many roles through UserRole
User.belongsToMany(Role, { through: UserRole, foreignKey: "user_id" });

module.exports = { User };
