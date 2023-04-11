import { Direccion } from './Direccion';
import { correo } from './mail';
import { Telefono } from './telefono';
// Clase para almacenar la información de una persona
export class Persona {
  constructor(
    public nombre: string,
    public apellidos: string,
    public dni: string,
    public edad: number,
    public cumpleaños: string,
    public colorFavorito: string,
    public sexo: string,
    public notas: string,
    public direcciones: Direccion[] = [],
    public telefonos: Telefono[] = [],
    public correos: correo[] = []
  ) { }

  // Añade una nueva dirección a la persona
  public añadirDireccion(direccion: Direccion) {
    this.direcciones.push(direccion);
  }

  // Añade un nuevo teléfono a la persona
  public añadirTelefono(telefono: Telefono) {
    this.telefonos.push(telefono);
  }

  // Añade un nuevo correo a la persona
  public añadirCorreo(correo: correo) {
    this.correos.push(correo);
  }
};

