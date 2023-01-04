import express from 'express';
import empleadosRutas from './routes/empleados.rutas.js'
import indexRutas from './routes/index.rutas.js';

const app = express()
app.use(express.json())

app.use(indexRutas)
app.use('/api', empleadosRutas)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint no encontrado'
    })
})

export default app;