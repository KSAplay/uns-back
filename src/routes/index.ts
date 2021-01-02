import { Router } from 'express';

// Aqui se colocan las rutas
const router = Router();

router.route('/')
    .get((req, res) => res.send('Hola Mundo'))

export default router;