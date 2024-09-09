import { Accion, Historial } from '../main';

/*
- **`AccionInicioSesion`** (hereda de `Accion`)
  - **Propiedades adicionales**:
    - `dispositivo_origen`: string - Dispositivo desde el cual se inició la sesión.
  - **Métodos**:
    - `mostrarDetalle()`: Sobrescribe para mostrar detalles específicos de inicio de sesión.
*/ 

class AccionInicioSesion extends Accion {
    dispositivo_origen: string;
    constructor(id: number, descripcion: string, fecha: Date, dispositivo_origen: string) {
        super(id, descripcion, fecha);
        this.dispositivo_origen = dispositivo_origen;
    }

    mostrarDetalle() : void | undefined {
        console.log(`ID: ${this.id}, Descripción: ${this.descripcion}, Fecha: ${this.fecha}, Dispositivo: ${this.dispositivo_origen}`);
    }
}

/*
- **`AccionCierreSesion`** (hereda de `Accion`)
  - **Propiedades adicionales**:
    - `dispositivo_origen`: string - Dispositivo desde el cual se cerró la sesión.
    - `tiempo_de_sesion`: number - Duración de la sesión en minutos.
  - **Métodos**:
    - `mostrarDetalle()`: Sobrescribe para mostrar detalles específicos de cierre de sesión.
*/

class AccionCierreSesion extends Accion {
    dispositivo_origen: string;
    tiempo_de_sesion: number;
    constructor(id: number, descripcion: string, fecha: Date, dispositivo_origen: string, tiempo_de_sesion: number) {
        super(id, descripcion, fecha);
        this.dispositivo_origen = dispositivo_origen;
        this.tiempo_de_sesion = tiempo_de_sesion;
    }

    mostrarDetalle(): void | undefined {
        console.log(`ID: ${this.id}, Descripción: ${this.descripcion}, Fecha: ${this.fecha}, Dispositivo: ${this.dispositivo_origen}, Duración: ${this.tiempo_de_sesion}`);
    }
}

/*
- **`AccionActualizacionPerfil`** (hereda de `Accion`)
  - **Propiedades adicionales**:
    - `cambios`: `Cambio[]` - Array de objetos de tipo `Cambio`, cada uno representando un cambio realizado.
  - **Métodos**:
    - `mostrarDetalle()`: Sobrescribe para mostrar detalles específicos de actualización de perfil.
*/
class AccionActualizacionPerfil extends Accion {
    cambios: Cambio[];
    constructor(id: number, descripcion: string, fecha: Date, cambios: Cambio[]) {
        super(id, descripcion, fecha);
        this.cambios = cambios;
    }

    mostrarDetalle(): void | undefined {
        console.log(`ID: ${this.id}, Descripción: ${this.descripcion}, Fecha: ${this.fecha}, Cambios: ${this.cambios}`);
    }
}

/*
- **Clase `Cambio`** (utilizada en `AccionActualizacionPerfil`)
  - **Propiedades**:
    - `id_cambio`: number - Identificador único del cambio.
    - `valor_anterior`: string - Valor antes del cambio.
    - `nuevo_valor`: string - Valor después del cambio.
    - `campo`: string - Nombre del campo modificado
  - **Métodos**:
    - `mostrarCambio()`: Imprime los detalles del cambio.
*/

class Cambio {
    id_cambio: number;
    valor_anterior: string;
    nuevo_valor: string;
    campo: string;
    constructor(id_cambio: number, valor_anterior: string, nuevo_valor: string, campo: string) {
        this.id_cambio = id_cambio;
        this.valor_anterior = valor_anterior;
        this.nuevo_valor = nuevo_valor;
        this.campo = campo;
    }

    mostrarCambio(): void | undefined {
        console.log(`ID: ${this.id_cambio}, Valor anterior: ${this.valor_anterior}, Nuevo valor: ${this.nuevo_valor}, Campo: ${this.campo}`);
    }
}

/*
- **`AccionCompra`** (hereda de `Accion`)
  - **Propiedades adicionales**:
    - `productos`: string[] - Array de nombres de productos comprados.
    - `total`: number - Monto total de la compra.
  - **Métodos**:
    - `mostrarDetalle()`: Sobrescribe para mostrar detalles específicos de la compra.
*/

class AccionCompra extends Accion {
    productos: string[];
    total: number;
    constructor(id: number, descripcion: string, fecha: Date, productos: string[], total: number) {
        super(id, descripcion, fecha);
        this.productos = productos;
        this.total = total;
    }

    mostrarDetalle(): void | undefined {
        console.log(`ID: ${this.id}, Descripción: ${this.descripcion}, Fecha: ${this.fecha}, Productos: ${this.productos}, Total: ${this.total}`);
    }
}

/*
- **`AccionEnvioMensaje`** (hereda de `Accion`)
  - **Propiedades adicionales**:
    - `destinatario`: string - Nombre o dirección del destinatario.
    - `mensaje`: string - Contenido del mensaje.
  - **Métodos**:
    - `mostrarDetalle()`: Sobrescribe para mostrar detalles específicos del envío de mensaje.
*/

class AccionEnvioMensaje extends Accion {
    destinatario: string;
    mensaje: string;
    constructor(id: number, descripcion: string, fecha: Date, destinatario: string, mensaje: string) {
        super(id, descripcion, fecha);
        this.destinatario = destinatario;
        this.mensaje = mensaje;
    }

    mostrarDetalle(): void | undefined {
        console.log(`ID: ${this.id}, Descripción: ${this.descripcion}, Fecha: ${this.fecha}, Destinatario: ${this.destinatario}, Mensaje: ${this.mensaje}`);
    }
}

export {AccionInicioSesion, AccionCierreSesion, AccionActualizacionPerfil, AccionCompra, AccionEnvioMensaje, Cambio}