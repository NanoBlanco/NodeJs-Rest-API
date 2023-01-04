import { pool } from '../db.js'

export const pong = async (req, res) => {
    const [resultado] = await pool.query('SELECT 2+5 AS resultado')
    res.json(resultado[0])
}