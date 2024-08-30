/*
class Accion {
    id: number;
    descripcion: string;
    fecha: Date;

    // constructor de la clase Accion
    constructor(id: number, descripcion: string) {
        this.id = id;
        this.descripcion = descripcion;
        this.fecha = new Date();
    }
}
class Historial {
    // acciones es un array de objetos de la clase Accion inicializado vacío
    // proximoId es un entero inicializado en 1. que genera un nuevo id para cada nueva accion
    acciones: Accion[] = [];
    proximoId: number = 1;

    // Metodos

    agregarAccion(descripcion: string): void {
        const nuevaAccion = new Accion(this.proximoId++, descripcion);
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

const historial = new Historial();
historial.agregarAccion("Inicio de sesión");
historial.agregarAccion("Visualización de perfil");
historial.mostrarHistorial();
historial.eliminarAccionPorID(1);
historial.mostrarHistorial();
historial.eliminarTodo();
historial.mostrarHistorial();
*/

class Accion {
    id: number;
    descripcion: string;
    fecha: string;

    constructor(id: number, descripcion: string, fecha: string) {
        this.id = id;
        this.descripcion = descripcion;
        this.fecha = fecha
    }
}

class Historial {
    //Esta clase tendrá una propiedad interna para almacenar las acciones en un array.
    acciones: Accion[] = []
    nuevo_id: number = 1

    //Metodos

    agregarAccion(descripcion: string, fecha: string) : void {
        const nuevaAccion = new Accion (this.nuevo_id++, descripcion, fecha)
        this.acciones.push(nuevaAccion)
    }

    eliminarAccionPorID(id: number) : void {
        //Buscar el indice de la accion en las acciones, luego hacer un splice sobre la lista de acciones
        const indice = this.acciones.findIndex(accion => accion.id === id)
        if (indice !== -1) {
            this.acciones.splice(indice, 1)
        }
        else{
            console.error(`No se encontro la accion solicitada con ID ${id}`)
        }
    }

    eliminarTodo() : void {
        this.acciones = []
    }

    //Método para mostrar en la consola todas las acciones en el historial.
    mostrarHistorial() : void {
        console.log("Historial de acciones:")
        this.acciones.forEach(accion => {
            console.log(`ID: ${accion.id}, Descripción: ${accion.descripcion}, Fecha: ${accion.fecha}`)
        })
    }
}

const historial = new Historial()
historial.agregarAccion("Inicio de sesión", "10/10/2022")
historial.agregarAccion("Visualización de perfil", "10/10/2022")
historial.mostrarHistorial()
historial.eliminarAccionPorID(1)
historial.mostrarHistorial()
historial.eliminarTodo()
historial.mostrarHistorial()