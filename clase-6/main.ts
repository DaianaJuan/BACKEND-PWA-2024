class Accion {
    id: number;
    descripcion: string;
    fecha: Date;

    constructor(id: number, descripcion: string) {
        this.id = id;
        this.descripcion = descripcion;
        this.fecha = new Date();
    }
}
class Historial {
    acciones: Accion[] = [];
    nextId: number = 1;
    agregarAccion(descripcion: string): void {
        const nuevaAccion = new Accion(this.nextId++, descripcion);
        this.acciones.push(nuevaAccion);
    }
    eliminarAccionPorID(id: number): void {
        const index = this.acciones.findIndex(accion => accion.id === id);
        if (index !== -1) {
            this.acciones.splice(index, 1);
            console.log(`Acción con ID ${id} eliminada.`);
        } else {
            console.log(`No se encontró acción con ID ${id}.`);
        }
    }
    eliminarTodo(): void {
        this.acciones = [];
        console.log("Todas las acciones han sido eliminadas.");
    }
    mostrarHistorial(): void {
        console.log("Historial de acciones:");
        this.acciones.forEach(accion => {
            console.log(`ID: ${accion.id}, Descripción: ${accion.descripcion}, Fecha: ${accion.fecha}`);
        });
    }
}
// Ejemplo de uso
const historial = new Historial();
historial.agregarAccion("Inicio de sesión");
historial.agregarAccion("Visualización de perfil");
historial.mostrarHistorial();
historial.eliminarAccionPorID(1);
historial.mostrarHistorial();
historial.eliminarTodo();
historial.mostrarHistorial();