import { Router } from 'express';

import { deleteNoticia, getNoticias, getNoticiasVisibles, getOneNoticia, updateNoticia, updateNoticiaVisible } from '../controllers/noticias.controller';

const router = Router();

router.route('/')
    .get(getNoticias);

router.route('/visibles')
    .get(getNoticiasVisibles);

router.route('/:id_noticia')
    .get(getOneNoticia)
    .put(updateNoticia)
    .delete(deleteNoticia);

router.route('/:id_noticia/visible')
    .put(updateNoticiaVisible);


export default router;