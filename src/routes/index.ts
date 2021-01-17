import { Router } from 'express';

// Controladores importados
import { getSecciones, getSeccionesOrden } from '../controllers/secciones.controller';

// Aqui se colocan las rutas
const router = Router();

// ----------------------------------------------------------
//                 RUTAS PARA LAS SECCIONES
// ----------------------------------------------------------
router.route('/secciones')
    .get(getSecciones);

router.route('/secciones/orden')
     .get(getSeccionesOrden);

export default router;