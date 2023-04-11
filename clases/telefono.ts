// Clase para almacenar la información de un teléfono
export class Telefono {
    public numeroFijo: string;
    public numeroMovil: string;
  
    constructor(fijo: string, movil: string) {
      this.numeroFijo = fijo;
      this.numeroMovil = movil;
    }
}