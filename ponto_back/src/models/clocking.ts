import { Model, DataTypes } from 'sequelize';
import { sequelize } from './index';
import ClockingHistory from './clockingHistory';

class Clocking extends Model {
  public id!: number;
  public userId!: number;
}

Clocking.init(
  {
    // id: {
    //   type: DataTypes.INTEGER,
    //   autoIncrement: true,
    //   primaryKey: true,
    // },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  },
  {
    sequelize,
    modelName: 'Clocking',
  }
);

Clocking.hasMany(ClockingHistory, { foreignKey: 'userId', sourceKey: 'userId' });
ClockingHistory.belongsTo(Clocking, { foreignKey: 'userId', targetKey: 'userId' });

export default Clocking;
