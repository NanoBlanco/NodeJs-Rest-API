import { Router } from "express";
import {dltEmpleado, getEmpleados, getEmpleado, updEmpleado, creaEmpleados} from '../controllers/empleados.controller.js'

const rutas = Router()

rutas.get('/empleados', getEmpleados)
rutas.get('/empleados/:id', getEmpleado)

rutas.post('/empleados', creaEmpleados)

rutas.patch('/empleados/:id', updEmpleado)

rutas.delete('/empleados/:id', dltEmpleado)

export default rutas;