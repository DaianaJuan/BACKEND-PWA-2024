import {AccionInicioSesion, AccionCierreSesion, AccionActualizacionPerfil, AccionCompra, AccionEnvioMensaje, Cambio} from './Types/Acciones.js';

/*
    1. Clase Base `Accion`
- **Propiedades**:
    - `id`: número - Identificador único de la acción.
    - `descripcion`: string - Descripción de la acción.
    - `fecha`: Date - Fecha en que se realizó la acción.
- **Métodos**:
    - `mostrarDetalle()`: Imprime en la consola los detalles de la acción.
*/

export class Accion {
    id: number;
    descripcion: string;
    fecha: Date;

    constructor(id: number, descripcion: string, fecha: Date) {
        this.id = id;
        this.descripcion = descripcion;
        this.fecha = fecha;
    }

    mostrarDetalle() {
        console.log(
            `ID: ${this.id}, Descripción: ${this.descripcion}, Fecha: ${this.fecha}`
        );
    }
}

/*
#### 3. Clase `Historial`
- **Propiedades**:
    - `acciones`: `Accion[]` - Array que contiene todas las acciones.
- **Métodos**:
    - `agregarAccion(accion: Accion)`: Agrega una nueva acción al historial.
    - `eliminarAccionPorID(id: number)`: Elimina una acción específica del historial usando su ID.
    - `eliminarTodo()`: Elimina todas las acciones del historial.
    - `mostrarHistorial()`: Muestra en la consola todas las acciones en el historial.
*/

export class Historial {
    acciones: Accion[];
    private idCounter: number;  // Variable para llevar la cuenta de los IDs
    constructor() {
        this.acciones = [];
        this.idCounter = 1;
    }

    agregarAccion(accion: Accion) {
        accion.id = this.idCounter++;  // Asignar el ID automáticamente
        this.acciones.push(accion);  // Agregar la acción al array
    }

    eliminarAccionPorID(id: number) {
        const index = this.acciones.findIndex((accion) => accion.id === id);
        if (index !== -1) {
            this.acciones.splice(index, 1);  // Eliminar la acción si se encuentra
            console.log(`Acción con ID ${id} eliminada.`);
        } else {
            console.log(`No se encontró una acción con ID ${id}.`);
        }
    }

    eliminarTodo() {
        return this.acciones = [];
    }

    mostrarHistorial() {
        if (this.acciones.length === 0) {
            console.log("No hay acciones en el historial.");
            return;
        }

        console.log("Historial de acciones:");
        this.acciones.forEach((accion) => {
            console.log(`ID: ${accion.id}, Descripción: ${accion.descripcion}, Fecha: ${accion.fecha}`);
        });
    }
}

// Crear el historial
const historial = new Historial();

// Agregar acciones simuladas
historial.agregarAccion(new AccionInicioSesion(0, "Usuario inició sesión", new Date("2024-08-31T12:00:00Z"), "PC de Escritorio"));

// Crear instancias de la clase Cambio
const cambios = [
    new Cambio(1, "correo@viejo.com", "correo@nuevo.com", "email"),
    new Cambio(2, "1234", "5678", "password")
];

// Agregar AccionActualizacionPerfil con las instancias de Cambio
historial.agregarAccion(new AccionActualizacionPerfil(0, "Usuario actualizó su perfil", new Date("2024-08-31T12:05:00Z"), cambios));

historial.agregarAccion(new AccionCierreSesion(0, "Usuario cerró sesión", new Date("2024-08-31T12:30:00Z"), "PC de Escritorio", 30));

historial.agregarAccion(new AccionCompra(0, "Usuario realizó una compra", new Date("2024-08-31T12:45:00Z"), ["Laptop", "Ratón"], 1500));

historial.agregarAccion(new AccionEnvioMensaje(0, "Usuario envió un mensaje", new Date("2024-08-31T13:00:00Z"), "admin@example.com", "Hola, necesito ayuda con mi cuenta."));

// Mostrar el historial de acciones
historial.mostrarHistorial();
