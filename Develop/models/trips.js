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
    trip_budget: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        unique: false,
    },
    traveller_amount: {
        type: DataTypes.TINYINT(50),
        allowNull: false,
        unique: false,
    },
    traveller_id: {
        type: DataTypes.INTERGER,
        references: {
            model: 'traveller',
            key: 'id',
        },
    },
    location_id: {
        type: DataTypes.INTERGER,
        references: {
            model: 'location',
            key: 'id',
        },      
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
