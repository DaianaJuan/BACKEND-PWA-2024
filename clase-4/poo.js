"use strict";
/*
# Consiga POO Ts
*Negocio:*
-Somos una empresa de Software (software factory) que se dedica a crear soluciones IT variadas
-Tenemos empleados del rubro IT
    *Tipos de empleados*
    *Project Manager
    *Developers
    *Disigners
    *Marketing
*Problema:*
Necesitamos crear un software que nos permita administrar el manejo de los empleados de la empresa
*Clase empleado:*
    *nombre
    *sueldo
    *fecha_de_contratacion
    *id_empleado
    *tipo: Project Manager, Developer, Disigner, Marketing
*Clase manejador empleados*
    *id_manejador
    *empleados (lista de empleados)
*metodos*
    *agregar_empleado
    *obtener_empleado_por_id
    *obtener_empleados_por_tipo
*/
let id_empleado = 0;
class TiposDeEmpleados {
    constructor(project, developers, disigners, marketing) {
        this.project = project;
        this.developers = developers;
        this.disigners = disigners;
        this.marketing = marketing;
    }
}
class Empleado {
    constructor(nombre, sueldo, fecha_de_contratacion, id_empleado, tipo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
        this.fecha_de_contratacion = fecha_de_contratacion;
        this.id_empleado = id_empleado;
        this.tipo = tipo;
    }
}
let id_manejador = 0;
class ManejadorEmpleados {
    constructor(id_manejador, empleados) {
        this.id_manejador = id_manejador++;
        this.empleados = empleados;
    }
    agregar_empleado(empleado) {
        this.empleados.push(empleado);
        return this.empleados;
    }
    obtener_empleado_por_id(id) {
        return this.empleados.find((empleado) => (empleado.id_empleado === id));
    }
    obtener_empleados_por_tipo(tipo) {
        return this.empleados.filter((empleado) => (empleado.tipo === tipo));
    }
}
const manejadorEmpleados = new ManejadorEmpleados(id_manejador, []);
// Crear un array de empleados de prueba
const empleadosDePrueba = [
    new Empleado("Juan Pérez", 3000, "2024-01-01", 1, "Developer"),
    new Empleado("Ana Gómez", 3500, "2024-02-01", 2, "Designer"),
    new Empleado("Carlos Martínez", 4000, "2024-03-01", 3, "Project Manager"),
    new Empleado("Lucía Rodríguez", 3200, "2024-04-01", 4, "Marketing"),
    new Empleado("Sofía López", 3100, "2024-05-01", 5, "Developer")
];
// Agregar empleados al manejador
empleadosDePrueba.forEach(empleado => manejadorEmpleados.agregar_empleado(empleado));
// Probar métodos
console.log("Todos los empleados:");
console.log(manejadorEmpleados.empleados);
console.log("\nEmpleado con ID 1:");
console.log(manejadorEmpleados.obtener_empleado_por_id(1)); // Debería devolver el empleado con ID 1
console.log("\nEmpleados de tipo 'Developer':");
console.log(manejadorEmpleados.obtener_empleados_por_tipo("Developer")); // Debería devolver los empleados con tipo 'Developer'
