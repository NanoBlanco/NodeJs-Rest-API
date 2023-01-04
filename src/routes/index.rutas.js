import { Router } from "express";
import {pong} from '../controllers/index.controller.js'

const rutas = Router();

rutas.get('/ping', pong);

export default rutas