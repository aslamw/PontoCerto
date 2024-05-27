import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const env = process.env.NODE_ENV ;//|| 'development';
const config = require('../config/mode.json')['development'];

const sequelize = new Sequelize({
    username: config.database.username,
    password: config.database.password,
    database: config.database.database,
    host: config.database.host,
    dialect: config.database.dialect ,
    storage: config.database.storage, 
});

export { sequelize };
