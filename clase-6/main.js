"use strict";
//La clase Accion incluirá tipos explícitos para sus propiedades.
class Accion {
    constructor(id, descripcion) {
        this.id = id;
        this.descripcion = descripcion;
        this.fecha = new Date();
    }
}
//La clase Historial también usará tipos explícitos y garantizará que las acciones sean instancias de la clase Accion.
class Historial {
    constructor() {
        this.acciones = [];
    }
    // Método para agregar una nueva acción al historial
    agregarAccion(accion) {
        this.acciones.push(accion);
    }
    // Método para eliminar una acción específica por su ID
    eliminarAccionPorID(id) {
        this.acciones = this.acciones.filter(accion => accion.id !== id);
    }
    // Método para eliminar todas las acciones del historial
    eliminarTodo() {
        this.acciones = [];
    }
    // Método para mostrar en la consola todas las acciones en el historial
    // usar forEach
    mostrarHistorial() {
        console.log("Historial de acciones:");
        if (this.acciones.length === 0) {
            console.log("No hay acciones en el historial.");
        }
        else {
            this.acciones.forEach(accion => {
                console.log(`ID: ${accion.id}, Descripción: ${accion.descripcion}, Fecha: ${accion.fecha}`);
            });
        }
    }
}
//usos
// Crear una instancia de Historial
const miHistorial = new Historial();
// Crear algunas acciones
const accion1 = new Accion(1, "Usuario inició sesión");
const accion2 = new Accion(2, "Usuario actualizó su perfil");
const accion3 = new Accion(3, "Usuario cerró sesión");
// Agregar acciones al historial
miHistorial.agregarAccion(accion1);
miHistorial.agregarAccion(accion2);
miHistorial.agregarAccion(accion3);
// Mostrar el historial
miHistorial.mostrarHistorial();
// Eliminar una acción por su ID
miHistorial.eliminarAccionPorID(2);
// Mostrar el historial actualizado
miHistorial.mostrarHistorial();
// Eliminar todas las acciones del historial
miHistorial.eliminarTodo();
// Mostrar el historial después de eliminar todo
miHistorial.mostrarHistorial();
