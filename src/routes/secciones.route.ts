import { Router } from 'express';
import { getSecciones, getSeccionesOrden, updateSeccionVisible, updateSeccionTema, updateSeccionPosicion } from '../controllers/secciones.controller';


const router = Router();

router.route('/')
    .get(getSecciones);

router.route('/visible')
    .put(updateSeccionVisible);

router.route('/tema')
    .put(updateSeccionTema);

router.route('/posicion')
    .put(updateSeccionPosicion);


router.route('/orden')
    .get(getSeccionesOrden);

export default router;