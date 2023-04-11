import { Persona } from './clases/Persona';
import { Direccion } from './clases/Direccion';
import { Telefono } from './clases/telefono';
import { correo } from './clases/mail';

// Creamos tres personas de ejemplo
const persona1 = new Persona(
  'Juan',
  'Pérez',
  '12345678A',
  28,
  '13/03/1995',
  'verde',
  'masculino',
  'le gusta cantar',

  [new Direccion('Calle Mayor', '2', '10', 'c', '28001', 'alicante', 'alicante')],
  [new Telefono('910000000', '677777777'),],
  [new correo('juan.perez@gmail.com')]
);

const persona2 = new Persona(
  'lina',
  'Rodriguez',
  '18345678A',
  39,
  '03/06/1984',
  'morado',
  'femenino',
  'le gusta ver pelis',

  [new Direccion('avenida ansaldo', '2', '6', 'c', '03540', 'alicante', 'alicante')],
  [new Telefono('910685453', '677449156'),],
  [new correo('lina.rodriguez@gmail.com')]
);

const persona3 = new Persona(
  'Juana',
  'Velasquez',
  '43345679B',
  38,
  '13/03/1985',
  'azul',
  'Femenino',
  'le gusta nadar',
  [new Direccion('avenida costablanca', '8', '6', 'b', '03540', 'alicante', 'alicante')],
  [new Telefono('910987365', '665449043')],
  [new correo('juana.velasquez@gmail.com')],
);

// Mostramos los datos de las personas en la consola

console.log("registrso de 3 personas");


console.log(persona1);
console.log(persona2);
console.log(persona3);

// Modificamos los datos de una persona por DNI
const personaModificada = persona3;
if (personaModificada.dni === '43345679B') {
  personaModificada.añadirDireccion(new Direccion('calle san martin', '4', '3', 'D', '03540', 'playa san juan', 'alicante'));
  personaModificada.añadirTelefono(new Telefono("902456123", "681654236"));
  personaModificada.añadirCorreo(new correo('juanavelazquez2023@gmail.com'));

};



console.log("registro modificado");


console.log(persona1);
console.log(persona2);
console.log(persona3);