import { Router } from 'express';

import { getMenuOfParent} from '../controllers/menus.controller';



const router = Router();

router.route('/parent/:id_parent')
    .get(getMenuOfParent);

export default router;