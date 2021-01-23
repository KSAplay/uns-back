import { Router } from 'express';
import { getSecciones, getSeccionesOrden, updateSeccionVisible, updateSeccionTema, updateSeccionPosicion } from '../controllers/secciones.controller';


const router = Router();

router.route('/')
    .get(getSecciones);

router.route('/orden')
    .get(getSeccionesOrden);

router.route('/visible')
    .put(updateSeccionVisible);

router.route('/tema')
    .put(updateSeccionTema);

router.route('/posicion')
    .put(updateSeccionPosicion);




export default router;