import dotenv from 'dotenv';
const { DB_USER } = require('../../credentials/credentials');
const { DB_PASSWORD } = require('../../credentials/credentials');
const { DATABASE } = require('../../credentials/credentials');

dotenv.config();

export default {
    HOST: process.env.HOST || 'NO ENCONTRO VAR ENTORNO',
    PORT: process.env.PORT || 3156,
    API_URL: process.env.API_URL || '/SXW',
    CONNECTION_STRING: process.env.CONNECTION_STRING || `mongodb+srv://${DB_USER}:${DB_PASSWORD}@sxw.r4yip.mongodb.net/`,
    DATABASE: process.env.DATABASE || DATABASE,
    DB_PASSWORD: process.env.DB_PASSWORD || DB_PASSWORD,
    DB_USER: process.env.DB_USER || DB_USER,
}

