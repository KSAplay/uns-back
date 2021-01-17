import { Router } from 'express';
import { getSecciones } from '../controllers/secciones.controller';


const router = Router();

router.route('/')
    .get(getSecciones);


export default router;