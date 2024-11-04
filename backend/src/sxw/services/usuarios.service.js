import usuario from '../models/usuarios';
import boom from '@hapi/boom';
import fetch from 'node-fetch';
const { HUNTER_API_KEY } = require('../../../credentials/credentials');

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