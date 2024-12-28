import sequelize from "../config/database";
import { DataTypes } from "sequelize";

const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  walletId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { sequelize, User };
