// Clase para almacenar la información de una dirección
 export class Direccion {
    constructor(
      public calle: string,
      public numero: string,
      public piso: string,
      public letra: string,
      public codigoPostal: string,
      public poblacion: string,
      public provincia: string
    ) {}
  }