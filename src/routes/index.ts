import { Router } from 'express';

// Controladores importados
import { getNoticia } from '../controllers/noticias.controller'

// Aqui se colocan las rutas
const router = Router();

router.route('/')
    .get(getNoticia)

export default router;