import mongoose from 'mongoose';

const { Schema } = mongoose;

const personajeSchema = new Schema({
    nombre: String,
    pais: String,
    epoca: String,
    descripcion: String
});

const personajeModel = mongoose.model('Personaje', personajeSchema);
module.exports = personajeModel;
