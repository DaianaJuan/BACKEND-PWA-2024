"use strict";
/* tipado para arrays */
const nombres = ["Juan", "Pedro", "Maria"];
const numeros = [1, 2, 3];
const arrayEspecial = [1, "dos"];
const lista_productos = [
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
];
const buscarProductosSegunPrecio = lista_productos.map((producto) => (producto.precio < 40) ? true : false);
console.log(buscarProductosSegunPrecio);
