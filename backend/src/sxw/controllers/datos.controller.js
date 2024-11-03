import datos from '../models/datos';
import * as Datos from '../services/datos.service';
import boom from '@hapi/boom';

//API GET

//LISTA DE DATOS DE ESTUDIANTES

export const getDatosList = async (req, res, next) => {
    try{
          const datosList = await Datos.getDatosList();
          if (!datosList) {
            throw boom.notFound('No se encontraron datos de los estudiantes registrados.');
          } else if (datosList) {
            res.status(200).json(datosList);
          } 

      } catch(error) {
        next(error);
      }
};

//UN SOLO ESTUDIANTE CON NC

export const getDatosItem = async (req, res, next) => {
  try {

    const { id } = req.params;
    
    const keyType = req.query.keyType || 'NC';
    const datosItem = await Datos.getDatosItem(id, keyType);
    if (!datosItem) {
      throw boom.notFound('No se encontraron datos registrados de ese estudiante.');
    } else if (datosItem) {
      res.status(200).json(datosItem);
    }
  }catch(error){
    next(error);
  }
};

//API POST.

//POST (ADD) DATOS DE UN ESTUDIANTE

export const postDatosItem = async (req, res, next) => {
  try {
    const DatosItem = req.body;
    const newDatosItem = await Datos.postDatosItem(DatosItem);
    if (!newDatosItem) {
      throw boom.badRequest('No se pudo crear el nuevo estudiante con sus datos.');
    } else if (newDatosItem) {
      res.status(201).json(newDatosItem);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//API PUT.

//PUT (UPDATE) DATOS DE UN ESTUDIANTE

export const putDatosItem = async (req, res, next) => {
  try {
  const { id } = req.params;
  
  const DatosItem = req.body;
      
  const updatedDatosItem = await Datos.putDatosItem(id, DatosItem );
  if (!updatedDatosItem) {
  throw boom.badRequest('No se pudo actualizar los datos del estudiante.');
  } else if (updatedDatosItem) {
  res.status(200).json(updatedDatosItem);
  }
  } catch (error) {
  next(error);
  }
  };

//API DELETE.

//DELETE DATOS DE UN ESTUDIANTE

export const deleteDatosItem = async (req, res, next) => {
  try {

    const { id } = req.params;

    const deletedDatosItem = await Datos.deleteDatosItem(id);

    if (!deletedDatosItem) {
      throw boom.notFound('No se pudo eliminar los datos del estudiante.');
    } else {
      res.status(200).json(deletedDatosItem);
    }
  } catch (error) {
    next(error); // Manejo de errores
  }
};