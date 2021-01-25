import { Router } from 'express';

import { createComunicado, deleteComunicado, getComunicados, getComunicadosVisibles, getOneComunicado , updateComunicado, updateComunicadoVisible} from '../controllers/comunicados.controller';

import multer from '../libs/multer';

const router = Router();

router.route('/')
    .get(getComunicados)
    .post(multer.single('imagen'),createComunicado);

router.route('/visibles')
    .get(getComunicadosVisibles);

router.route('/:id_comunicado')
    .get(getOneComunicado)
    .put(multer.single('imagen'),updateComunicado)
    .delete(deleteComunicado);

router.route('/:id_comunicado/visible')
    .put(updateComunicadoVisible);

export default router;