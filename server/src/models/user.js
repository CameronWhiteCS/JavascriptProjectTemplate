import sequelize from '~/models/sequelizeInstance';

import { DataTypes } from 'sequelize';

export default sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,

    }
});