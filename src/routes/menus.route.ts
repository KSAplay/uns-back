import { Router } from 'express';

import { getMenuOfParent, isNodoFinal} from '../controllers/menus.controller';



const router = Router();

router.route('/parent/:id_parent')
    .get(getMenuOfParent);

router.route('/isnodofinal/:id_menu')
    .get(isNodoFinal);

export default router;