import dotenv from 'dotenv';
const { DB_PORT_M, DB_API_URL_M, DB_URL_M, DB_USER_M, DB_PASSWORD_M, DATABASE_M, HOST_R, PORT_R, PASSWORD_R } = require('../../credentials/credentials');

dotenv.config();

export default {
    HOST: process.env.HOST_M || 'NO ENCONTRO VAR ENTORNO',
    PORT: process.env.DB_PORT_M || DB_PORT_M,
    API_URL: process.env.API_URL_M || DB_API_URL_M,
    CONNECTION_STRING: process.env.CONNECTION_STRING_M || DB_URL_M,
    DATABASE: process.env.DATABASE_M || DATABASE_M,
    DB_PASSWORD: process.env.DB_PASSWORD_M || DB_PASSWORD_M,
    DB_USER: process.env.DB_USER_M || DB_USER_M,
    host: process.env.HOST_R || HOST_R,
    port: process.env.PORT_R || PORT_R,
    password: process.env.PASSWORD_R || PASSWORD_R
}

