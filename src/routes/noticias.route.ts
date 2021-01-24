import { Router } from 'express';

import { deleteNoticia, getNoticias, getNoticiasVisibles, getOneNoticia, updateNoticia, updateNoticiaVisible } from '../controllers/noticias.controller';

import multer from '../libs/multer';

const router = Router();

router.route('/')
    .get(getNoticias);

router.route('/visibles')
    .get(getNoticiasVisibles);

router.route('/:id_noticia')
    .get(getOneNoticia)
    .put(multer.single('imagen'),updateNoticia)
    .delete(deleteNoticia);

router.route('/:id_noticia/visible')
    .put(updateNoticiaVisible);


export default router;