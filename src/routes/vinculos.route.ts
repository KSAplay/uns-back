import { Router } from 'express';

import { getVinculos, getVinculosVisibles, getOneVinculo, updateVinculoVisible, updateVinculo, deleteVinculo } from '../controllers/vinculos.controller';

const router = Router();

router.route('/')
    .get(getVinculos);

router.route('/visibles')
    .get(getVinculosVisibles);

router.route('/:id_vinculo')
    .get(getOneVinculo)
    .put(updateVinculo)
    .delete(deleteVinculo);

router.route('/:id_vinculo/visible')
    .put(updateVinculoVisible);

export default router;