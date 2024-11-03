import dotenv from 'dotenv';
dotenv.config();
export default {
    HOST: process.env.HOST || 'NO ENCONTRO VAR ENTORNO',
    PORT: process.env.PORT || 3000,
    API_URL: process.env.API_URL || '/TEC/TEPIC',
    //CONNECTION_STRING: process.env.CONNECTION_STRING || 'mongodb://partida04:Legendario156@localhost:27020/Estudiantes',
    CONNECTION_STRING: process.env.CONNECTION_STRING || 'mongodb+srv://partida04:Legendario156@tec-tepic.zvz5a.mongodb.net/',
    DATABASE: process.env.DATABASE || 'Estudiantes',
    DB_PASSWORD: process.env.DB_PASSWORD || 'Legendario156',
    DB_USER: process.env.DB_USER || 'partida04',
}