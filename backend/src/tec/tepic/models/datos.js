import * as mongoose from 'mongoose';

const datosSchema = new mongoose.Schema({
    NumCtrl: { type : String, required : true },
    Nombres: { type : String},
    Apellidos: { type : String },
});

export default mongoose.model(
    'Datos',
    datosSchema,
    'Datos'
)