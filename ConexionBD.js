const mongoose = require('mongoose');
//import PersonajeSchema from './PersonajeSchema'

const { Schema } = mongoose;

const personajeSchema = new Schema({
    nombre: String,
    pais: String,
    epoca: String,
    descripcion: String
});

const personajeModel = mongoose.model('Personaje', personajeSchema);

main().catch(e => console.error('Error en la conexión a la base de datos.', e));

async function main() {
    await mongoose.connect("mongodb+srv://espiritudeaire:123@cluster0.lg823yo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log('Conexión exitosa');

    let personaje = new personajeModel({
        nombre: 'Simón Bolívar',
        pais: 'Venezuela',
        epoca: 'Independencia',
        descripcion: 'Líder militar y político de la independencia latinoamericana.'
    })
    
    await personaje.save();
}
