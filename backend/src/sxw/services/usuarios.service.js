import usuario from '../models/usuarios';
import boom from '@hapi/boom';

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