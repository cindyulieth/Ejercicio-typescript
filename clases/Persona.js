"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
// Clase para almacenar la información de una persona
class Persona {
    constructor(nombre, apellidos, dni, edad, cumpleaños, colorFavorito, sexo, notas, direcciones = [], telefonos = [], correos = []) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.edad = edad;
        this.cumpleaños = cumpleaños;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.notas = notas;
        this.direcciones = direcciones;
        this.telefonos = telefonos;
        this.correos = correos;
    }
    // Añade una nueva dirección a la persona
    añadirDireccion(direccion) {
        this.direcciones.push(direccion);
    }
    // Añade un nuevo teléfono a la persona
    añadirTelefono(telefono) {
        this.telefonos.push(telefono);
    }
    // Añade un nuevo correo a la persona
    añadirCorreo(correo) {
        this.correos.push(correo);
    }
}
exports.Persona = Persona;
