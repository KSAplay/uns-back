import { Router } from 'express';

import { deleteComunicado, getComunicados, getComunicadosVisibles, getOneComunicado , updateComunicado, updateComunicadoVisible} from '../controllers/comunicados.controller';

const router = Router();

router.route('/')
    .get(getComunicados);

router.route('/visibles')
    .get(getComunicadosVisibles);

router.route('/:id_comunicado')
    .get(getOneComunicado)
    .put(updateComunicado)
    .delete(deleteComunicado);

router.route('/:id_comunicado/visible')
    .put(updateComunicadoVisible);


export default router;