import { Empleado, Puesto, Pasante } from './Types/Empleado.js'

// CORRECCIÓN TAREA CLASE 4

class ManejadorEmpleados {
    id_empleados: number
    empleados: Empleado[]
    empresa: string
    constructor(empresa : string) {
        this.id_empleados = 0
        this.empleados = []
        this.empresa = empresa
    }
    
    agregar_empleado(nombre: string, sueldo: number, fecha_de_contratacion: string,  puesto: Puesto) : Empleado[] {
        const nuevoEmpleado = new Empleado(nombre, sueldo, fecha_de_contratacion, puesto, this.id_empleados++)
        this.empleados.push(nuevoEmpleado)
        return this.empleados
    }
    obtener_empleado_por_id(id : number) : Empleado | undefined {
        return this.empleados.find((empleado : Empleado) : boolean => (empleado.id_empleado === id))
    }
    obtener_empleados_por_tipo(puesto : Puesto) : Empleado[] {
        return this.empleados.filter((empleado : Empleado) : boolean => (empleado.puesto === puesto))
    }
}
const manejadorEmpleados : ManejadorEmpleados = new ManejadorEmpleados('Banco de la pampa');

manejadorEmpleados.agregar_empleado('Carlos', 2000, '01-01-2022', 'Project')
manejadorEmpleados.agregar_empleado('Daiana', 200000, '01-12-2024', 'Developer')

const dai : Empleado | undefined = manejadorEmpleados.obtener_empleado_por_id(1)

dai.aumentarSueldo(100000)

console.log(dai)

const devBanco : Empleado[] = manejadorEmpleados.obtener_empleados_por_tipo('Developer')

const pasante_1 = new Pasante('Luis', 1000, '01-01-2022', 'Project', 1, 6)

pasante_1.aumentarSueldo(30000)
pasante_1.finalizarPsantia()

console.log(pasante_1)

pasante_1.presentar()
dai.presentar()

console.log(devBanco)

console.log(manejadorEmpleados)