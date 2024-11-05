import usuario from '../models/usuarios';
import * as Usuario from '../services/usuarios.service';
import boom from '@hapi/boom';

// API GET 
// GET PARA BUSCAR CUENTA CON EL CORREO
export const getInicioSesion = async (req, res, next) =>{
  try{
    const { email } = req.query;

    const contraseña = await Usuario.getBuscarCuenta(email);

    if (!contraseña) {
      res.status(404).json({ message: 'No se encontró la cuenta' });
    }else{
      res.status(200).json({ contraseña: contraseña});
    } 
  }catch(error){
    console.log(error);
    next(error);
  }
}
// GET PARA BUSCAR CUENTA CON EL CORREO
// GET PARA VERIFICAR SI EL CORREO YA SE ENCUENTRA REGISTRADO
export const getVerificarCuenta = async (req, res, next) => {
  try{
    const { email } = req.query;

    const cuenta = await Usuario.getVerificarCuenta(email);
    
    if (!cuenta) {
      res.status(404);
      throw boom.notFound('No se encontraron el correo registrado.');
    } else if (cuenta) {
      res.status(200).json(cuenta);
    }
  }catch(error){
    console.log(error);
    next(error);
  }
}
// GET PARA VERIFICAR SI EL CORREO YA SE ENCUENTRA REGISTRADO
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
//POST (ADD) INICIO DE SESION DE CUENTA
export const postCuenta = async (req, res, next) => {
  try {
    
    const { email } = req.params;

    const { contraseña } = req.query;

    const newCuenta = await Usuario.postCuenta(email, contraseña);
    
    if(!newCuenta){
      throw boom.badRequest('No se pudo crear la cuenta.');
    }else if (newCuenta){
      res.status(201).json({ message: 'Cuenta creada con éxito', newCuenta });
    }
  } catch(error){
    console.log(error);
    next(error);
  }
};
//POST (ADD) INICIO DE SESION DE CUENTA
//API POST.