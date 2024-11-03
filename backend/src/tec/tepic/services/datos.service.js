import datos from '../models/datos';
import boom from '@hapi/boom';

//GET DE LOS DATOS EN LISTA
export const getDatosList = async () => {
    let datosList;
    try {
          datosList = await datos.find();
          return(datosList);
    } catch (error) {
      throw boom.internal(error);
    }
};

//GET DE LOS DATOS POR ID
export const getDatosItem = async (id, keyType) => {
    let datoItem;
   
    try {
      if (keyType === 'NC') {
        datoItem = await datos.findOne({
        NumCtrl: id,
        });
      }
      return(datoItem);
    } catch (error) {
      throw boom.internal(error);
    }
};

// POST (ADD) DATOS DE UN ESTUDIANTE

export const postDatosItem = async (DatosItem) => {
  try {
  const newDatosItem = new datos(DatosItem);
  return await newDatosItem.save();
  } catch (error) {
  throw error;
  }
  };

// PUT (UPDATE) DATOS DE UN ESTUDIANTE

export const putDatosItem = async (id, DatosItem) => {
  try {
  return await datos.findOneAndUpdate({ NumCtrl: id }, DatosItem, {
  new: true,
  });
  } catch (error) {
  throw boom.badImplementation(error);
  }
  };

// DELETE DATOS DE UN ESTUDIANTE

export const deleteDatosItem = async (id) => {
    const result = await datos.findByIdAndDelete(id); // Suponiendo que 'Estudiante' es tu modelo
    return result;
  };