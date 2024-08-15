let nombre : string | null = 'pepe'
nombre = String(0)

/* cualquier tipo de dato, es el ultimo recurso hasta saber el tipo de dato */
let datoRandom : any = 10

console.log('Hola ' + nombre)

/* funcion sumar a + b */
function sumar (a : number, b : number) : number {
    return a + b   
}

sumar(6, 2)

/* Cuando hay un ? al final de un parametro significa que ese valor es OPCIONAL */
/* const saludar = (edad : number = 10, nombre? : string) => {
    console.log('mi edad es ' + edad)
    if(nombre){
        return 'hola ' + nombre
    }
    else{
        return 'Hola, no se tu nombre'
    }
}

console.log(saludar()) */

/* prompt('dime algo', 'hola') */

interface Persona {
    nombre: string, 
    apellido: string, 
    edad: number
}

const persona : Persona = {
    nombre: 'pepe',
    apellido: 'suarez',
    edad: 10
}

const persona_2 : Persona = {
    nombre: 'pepe',
    apellido: 'suarez',
    edad: 10
}

const saludarAPersona = (persona : Persona) => {
    alert('hola ' + persona.nombre)
}

saludarAPersona(persona_2)

/*
calcularIva que recibe un numero y devuelve un numero que sera el 21% del numero recibido

obtenerImpuestoIva que recibira un numero y retornara un objeto, el objeto tendra el siguiente esquema:
{
    iva: 21% del numero recibido,
    total: numero recibido + iva,
    base: numero recibido
}
*/

const calcularIva = (numero : number) : number => {
    return numero * 0.21
}
console.log(calcularIva(100))
interface ImpuestoIva {
    iva: number,
    total: number,
    base: number
}
const obtenerImpuestoIva = (numero : number) : ImpuestoIva => {
    return {
        iva: numero * 0.21,
        total: numero + (numero * 0.21),
        base: numero
    }
}
console.log(obtenerImpuestoIva(100))

/*
crear una funcion que se llame crearPersonaje que recibira un nombre, una edad y una ciudad de origen y retornara
un objeto con el sig esquema:

{
    nombre: nombre,
    edad: edad,
    ciudadOrigen: ciudadOrigen,
    vida: 100,
    armadura: 0,
    ataque: 0,
    defensa: 0
}
*/ 

interface Personaje {
    nombre: string,
    edad: number,
    ciudadOrigen: string,
    vida: number,
    armadura: number,
    ataque: number,
    defensa: number
}
const crearPersonaje = (nombre: string, edad: number, ciudadOrigen: string): Personaje => {
    return {
        nombre,
        edad,
        ciudadOrigen,
        vida: 100,
        armadura: 0,
        ataque: 0,
        defensa: 0
    }
}

/*
    interface Personaje {
    nombre: string,
    edad: String,
    ciudadOrigen: string,
    vida: number,
    armadura: number,
    ataque: number,
    defensa: number
}
const crearPersonaje = (nombre : string, edad : string, ciudad : string) : Personaje =>{
    return {
        nombre: nombre,
        edad: edad,
        ciudadOrigen: ciudad,
        vida: 100,
        armadura: 80,
        ataque: 80,
        defensa: 95
    }
}
console.log (crearPersonaje('Obi-Wan Kenobi', '57 años', 'Platena Tatooine' ))
*/