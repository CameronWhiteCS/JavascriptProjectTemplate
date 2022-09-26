import path from 'path';
import dotenv from 'dotenv';

dotenv.config({path: path.join(__dirname, '../../.env')});

export default {
    database: {
        database: process.env['MYSQL_DATABASE'],
        username: process.env['MYSQL_USER'],
        password: process.env['MYSQL_PASSWORD'],
        host: process.env['MYSQL_HOST'],
        port: parseInt(process.env['MYSQL_PORT']),
    },
    expressPort: process.env['EXPRESS_PORT'] || 3001
}