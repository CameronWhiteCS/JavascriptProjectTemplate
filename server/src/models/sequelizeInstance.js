import config from '~/config';
import { Sequelize } from 'sequelize';

export default new Sequelize({
    database: config.database.database,
    username: config.database.username,
    password: config.database.password,
    host: config.database.host,
    port: config.database.port,
    dialect: 'mysql'
});

