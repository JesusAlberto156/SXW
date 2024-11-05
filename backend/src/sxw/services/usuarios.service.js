import usuario from '../models/usuarios';
import conexionBasesDeDatos from '../../config/database.config';
import boom from '@hapi/boom';
import fetch from 'node-fetch';
const { HUNTER_API_KEY } = require('../../../credentials/credentials');

let redis;

(async () => {
    const conexiones = await conexionBasesDeDatos();
    redis = conexiones.redis;
})();

// GET PARA BUSCAR CUENTA CON EL CORREO
export const getBuscarCuenta = async (email) => {
  
  let contraseña;

  try{
    contraseña = await redis.get(email);
    if (contraseña) {
        console.log('Cuenta encontrada:', contraseña);
        return contraseña
    } else {
        console.log('No se encontró la cuenta');
        return null
    }
  }catch(error){
    console.error('Error al encontrar el correo: ', error);
  }
}
// GET PARA BUSCAR CUENTA CON EL CORREO
// GET PARA VERIFICAR SI EL CORREO YA SE ENCUENTRA REGISTRADO
export const getVerificarCuenta = async (email) => {
  
  let cuenta;

  try{
    cuenta = await usuario.findOne({
      email: email,
    });
    return cuenta;
  }catch (error){
    console.error('Error al verificar si la cuenta existe:', error);
  }
} 
// GET PARA VERIFICAR SI EL CORREO YA SE ENCUENTRA REGISTRADO
// GET PARA VERIFICAR CORREO CON Hunter.io
export const getVerificarEmail = async (email) => {

  const url = `https://api.hunter.io/v2/email-verifier?email=${email}&api_key=${HUNTER_API_KEY}`;

  try {
    const newVerificarCorreo = await fetch(url);
    if (!newVerificarCorreo.ok) {
      throw new Error('No es posible conectar con Hunter.io');
    }
    const data = await newVerificarCorreo.json();
    return data;
  } catch (error) {
    console.error('Error al verificar el correo electrónico:', error);
    throw error;
  }
};
// GET PARA VERIFICAR CORREO CON Hunter.io
// POST (ADD) DATOS DE USUARIO
export const postUsuarioItems = async (UsuarioItems) => {
  try {
    const newUsuarioItems = new usuario(UsuarioItems);
    return await newUsuarioItems.save();
  } catch (error) {
    throw error;
  }
};
// POST (ADD) DATOS DE USUARIO
// POST (ADD) INICIO DE SESION DE CUENTA
export const postCuenta = async (email,contraseña) => {
  try{
    await redis.set(email,contraseña);
    console.log('Cuenta creada:',{email,contraseña});
    return {email,contraseña};
  }catch(error){
    throw error;
  }
}
// POST (ADD) INICIO DE SESION DE CUENTA