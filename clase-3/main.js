"use strict";
let nombre = 'pepe';
nombre = String(0);
/* cualquier tipo de dato, es el ultimo recurso hasta saber el tipo de dato */
let datoRandom = 10;
console.log('Hola ' + nombre);
/* funcion sumar a + b */
function sumar(a, b) {
    return a + b;
}
sumar(6, 2);
const persona = {
    nombre: 'pepe',
    apellido: 'suarez',
    edad: 10
};
const persona_2 = {
    nombre: 'pepe',
    apellido: 'suarez',
    edad: 10
};
const saludarAPersona = (persona) => {
    alert('hola ' + persona.nombre);
};
saludarAPersona(persona_2);
/*
calcularIva que recibe un numero y devuelve un numero que sera el 21% del numero recibido

obtenerImpuestoIva que recibira un numero y retornara un objeto, el objeto tendra el siguiente esquema:
{
    iva: 21% del numero recibido,
    total: numero recibido + iva,
    base: numero recibido
}
*/
const calcularIva = (numero) => {
    return numero * 0.21;
};
console.log(calcularIva(100));
const obtenerImpuestoIva = (numero) => {
    return {
        iva: numero * 0.21,
        total: numero + (numero * 0.21),
        base: numero
    };
};
console.log(obtenerImpuestoIva(100));
const crearPersonaje = (nombre, edad, ciudadOrigen) => {
    return {
        nombre,
        edad,
        ciudadOrigen,
        vida: 100,
        armadura: 0,
        ataque: 0,
        defensa: 0
    };
};
