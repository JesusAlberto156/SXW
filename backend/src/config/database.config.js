import mongoose from 'mongoose';
import config from './config';
const Redis = require('ioredis');

const conexionBasesDeDatos = async () => {
    try {
        const db = await mongoose.connect(config.CONNECTION_STRING, {
            dbName: config.DATABASE
        });
        console.log('Conectado a la Base de Datos: ',db.connection.name);

        const redis = new Redis({
            host: config.host ,
            port: config.port, 
            password: config.password                 
        });

        redis.on('connect', () => {
            console.log('Conectado a la Base de Datos: 0');
        });

        return {db , redis};
    } catch (error) {
        console.log('Error: ', error);
    }
};

export default conexionBasesDeDatos;