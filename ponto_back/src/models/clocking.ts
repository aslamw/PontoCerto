import { Model, DataTypes } from 'sequelize';
import { sequelize } from './index';

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

export default Clocking;
