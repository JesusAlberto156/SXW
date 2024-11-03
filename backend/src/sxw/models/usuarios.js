import * as mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
    usuario: { type : String, required : true },
    nombre: { type : String, required : true },
    email: { type : String, required : true },
    contraseña: {type : String, required : true },
    tipo: {type : Boolean}
}, { versionKey: false });

export default mongoose.model(
    'cat_usuarios',
    usuarioSchema,
    'cat_usuarios'
)