import {pool} from '../db.js'

export const getEmpleados = async (req, res) => {
    try {
        const [filas] = await pool.query('SELECT * FROM empleados')
        res.json(filas)
    } catch (error) {
        return res.status(500).json({
            message: 'Algo salio mal...'
        })
    }
}

export const getEmpleado = async (req, res) => {
    try {
        const id = req.params.id
        const [fila] = await pool.query('SELECT * FROM empleados WHERE id = ?',[id])
        if (fila.length <= 0) return res.status(404).json({
            message: 'Empleado no encontrado.'
        })
        res.json(fila)
    } catch (error) {
        return res.status(500).json({
            message: 'Algo salio mal...'
        })
    }
}

export const creaEmpleados = async (req, res) => {
    try {
        const { nombre, salario } = req.body
        const [filas] = await pool.query('INSERT INTO empleados (nombre, salario) VALUES (?, ?)', [nombre, salario])
        res.send({
            id: filas.insertId,
            nombre,
            salario
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Algo salio mal...'
        })
    }
    
}

export const updEmpleado = async (req, res) => {
    try {
        const {id} = req.params
        const { nombre, salario } = req.body
        const [result] = await pool.query('UPDATE empleados SET nombre = IFNULL(?, nombre), salario = IFNULL(?, salario) WHERE id = ?',[nombre, salario, id])
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Empleado no encontrado.'
        })
        const [fila] = await pool.query('SELECT * FROM empleados WHERE id = ?', [id])
        res.json(fila[0]) 
    } catch (error) {
        return res.status(500).json({
            message: 'Algo salio mal...'
        })
    }
}

export const dltEmpleado = async (req, res) => {
    try {
        const id = req.params.id
        const [result] = await pool.query('DELETE FROM empleados WHERE id = ?',[id])
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Empleado no encontrado.'
        })
    res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Algo salio mal...'
        }) 
    }
}