/* tipado para arrays */

const nombres : string[] = ["Juan","Pedro","Maria"];

const numeros : number[] = [1,2,3];

const arrayEspecial : [number,string] = [1,"dos"];





/* 
forEach => void

map => array

filter => array con el tipo de array original
Productos[] =>  filter() => Productos[]

find => elemento del array | undefined
Productos[] => find() => Producto | undefined
Item[] => find() => Item | undefined

findIndex => number 
 */

/* Quiero un array de booleanos donde los productos cuyo precio sea menor a 40 esten como true, pero los que sean mayores o iguales esten como false

[
    {precio: 10},
    {precio: 20},
    {precio: 41},
    {precio: 50}
]

return 

[
    true,
    true,
    false,
    false
]
*/

interface Producto {
    nombre: string,
    id: number,
    precio: number,
    descripcion: string,
    title: string
}

const lista_productos : Producto[] = [
    {
        nombre: 'tv noblex',
        id: 2,
        precio: 30,
        descripcion: 'lorem',
        title: 'La mejor'
    },
    {
        nombre: 'tv LG',
        id: 3,
        precio: 50,
        descripcion: 'lorem',
        title: 'Si'
    }
]


const buscarProductosSegunPrecio : boolean[] = lista_productos.map((producto) => (producto.precio < 40) ? true : false)
console.log(buscarProductosSegunPrecio)


