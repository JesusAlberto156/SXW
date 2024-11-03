import dotenv from 'dotenv';
dotenv.config();
export default {
    HOST: process.env.HOST || 'NO ENCONTRO VAR ENTORNO',
    PORT: process.env.PORT || 3000,
    API_URL: process.env.API_URL || '/TEC/TEPIC',
    CONNECTION_STRING: process.env.CONNECTION_STRING || 'mongodb+srv://JPartida04:Legendario156@sxw.r4yip.mongodb.net/',
    DATABASE: process.env.DATABASE || 'db_sonido_xaviers',
    DB_PASSWORD: process.env.DB_PASSWORD || 'Legendario156',
    DB_USER: process.env.DB_USER || 'JPartida04',
}