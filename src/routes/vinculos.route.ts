import { Router } from 'express';

import { getVinculos, getVinculosVisibles, getOneVinculo, updateVinculoVisible, updateVinculo, deleteVinculo, createVinculo } from '../controllers/vinculos.controller';

import multer from '../libs/multer';

const router = Router();

router.route('/')
    .get(getVinculos)
    .post(multer.single('imagen'),createVinculo);

router.route('/visibles')
    .get(getVinculosVisibles);

router.route('/:id_vinculo')
    .get(getOneVinculo)
    .put(multer.single('imagen'),updateVinculo)
    .delete(deleteVinculo);

router.route('/:id_vinculo/visible')
    .put(updateVinculoVisible);

export default router;