import { Router } from 'express';
import { getTemas, getTemaBySeccionFrontendID } from '../controllers/temas.controller';


const router = Router();

router.route('/')
    .get(getTemas);

router.route('/seccion/frontendid/:frontend_id')
    .get(getTemaBySeccionFrontendID);

export default router;