import { Model, DataTypes } from 'sequelize';
import { sequelize } from './index';
import Clocking from './clocking';

class ClockingHistory extends Model {
  public id!: number;
  public userId!: string;
  public type!: 'start' | 'end';
  public timestamp!: string;
}

ClockingHistory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // userId: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   references: {
    //     model: 'Clocking',
    //     key: 'userId',
        
    //   },
    //   onDelete: 'CASCADE'
    // },
    type: {
      type: DataTypes.ENUM('start', 'end'),
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'ClockingHistory',
  }
);

ClockingHistory.belongsTo(Clocking, {foreignKey: 'userId', onDelete: 'CASCADE'});

export default ClockingHistory;
