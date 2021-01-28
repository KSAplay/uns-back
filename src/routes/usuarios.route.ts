import { Router } from 'express';

import { iniciarSession, registrarUsuario } from '../controllers/usuario.controller';

const router = Router();

router.route('/iniciarSession')
    .post(iniciarSession)

router.route('/registrarUsuario')
    .post(registrarUsuario);


export default router;