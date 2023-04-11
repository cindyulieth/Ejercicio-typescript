"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
// Clase para almacenar la información de una dirección
class Direccion {
    constructor(calle, numero, piso, letra, codigoPostal, poblacion, provincia) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.letra = letra;
        this.codigoPostal = codigoPostal;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }
}
exports.Direccion = Direccion;
