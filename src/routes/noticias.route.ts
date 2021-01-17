import { Router } from 'express';

import { getNoticias } from '../controllers/noticias.controller';

const router = Router();

router.route('/')
    .get(getNoticias);


export default router;