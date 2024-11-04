import usuario from '../models/usuarios';
import * as Usuario from '../services/usuarios.service';
import boom from '@hapi/boom';

// API GET 
// GET PARA VERIFICAR EL CORREO CON Hunter.io
export const getVerificarEmail = async (req, res, next) => {
  try {
    const { email } = req.query;
    if (!email) {
      throw boom.badRequest('Se requiere un correo electrónico para la verificación.');
    }

    const verificacionData = await Usuario.getVerificarEmail(email);
    
    res.status(200).json(verificacionData);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
// GET PARA VERIFICAR EL CORREO CON Hunter.io
//API POST.
//POST (ADD) DATOS DE UN USUARIO
export const postUsuarioItems = async (req, res, next) => {
  try {
    const UsuarioItems = req.body;
    const newUsuarioItems = await Usuario.postUsuarioItems(UsuarioItems);
    if (!newUsuarioItems) {
      throw boom.badRequest('No se pudo crear el nuevo usuario.');
    } else if (newUsuarioItems) {
      res.status(201).json(newUsuarioItems);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
//POST (ADD) DATOS DE UN USUARIO
//API POST.