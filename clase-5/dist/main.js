import { Empleado, Pasante } from './Types/Empleado.js';
// CORRECCIÓN TAREA CLASE 4
class ManejadorEmpleados {
    constructor(empresa) {
        this.id_empleados = 0;
        this.empleados = [];
        this.empresa = empresa;
    }
    agregar_empleado(nombre, sueldo, fecha_de_contratacion, puesto) {
        const nuevoEmpleado = new Empleado(nombre, sueldo, fecha_de_contratacion, puesto, this.id_empleados++);
        this.empleados.push(nuevoEmpleado);
        return this.empleados;
    }
    obtener_empleado_por_id(id) {
        return this.empleados.find((empleado) => (empleado.id_empleado === id));
    }
    obtener_empleados_por_tipo(puesto) {
        return this.empleados.filter((empleado) => (empleado.puesto === puesto));
    }
}
const manejadorEmpleados = new ManejadorEmpleados('Banco de la pampa');
manejadorEmpleados.agregar_empleado('Carlos', 2000, '01-01-2022', 'Project');
manejadorEmpleados.agregar_empleado('Daiana', 200000, '01-12-2024', 'Developer');
const dai = manejadorEmpleados.obtener_empleado_por_id(1);
dai.aumentarSueldo(100000);
console.log(dai);
const devBanco = manejadorEmpleados.obtener_empleados_por_tipo('Developer');
const pasante_1 = new Pasante('Luis', 1000, '01-01-2022', 'Project', 1, 6);
pasante_1.aumentarSueldo(30000);
pasante_1.finalizarPsantia();
console.log(pasante_1);
pasante_1.presentar();
dai.presentar();
console.log(devBanco);
console.log(manejadorEmpleados);
