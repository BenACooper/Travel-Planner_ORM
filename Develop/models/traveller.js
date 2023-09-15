const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Traveller extends Model {}

Traveller.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.VARCHAR(50),
      allowNull: false,
      unique: false,
    },
    email: {
      type: DataTypes.VARCHAR(50),
      allowNull: false,
      unique: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "traveller",
  }
);
