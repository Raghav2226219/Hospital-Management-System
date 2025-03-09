const { DataTypes } = require("sequelize");
const sequelize = require("../config/mysql");

const Permission = sequelize.define(
  "Permission",
  {
    permission_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    permission_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "permissions",
    timestamps: false, // No created_at or updated_at fields in the table
  }
);

module.exports = Permission;
