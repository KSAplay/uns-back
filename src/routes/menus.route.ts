import { Router } from 'express';

import { getMenuOfParent, updateMenuVisible} from '../controllers/menus.controller';



const router = Router();

router.route('/parent/:id_parent')
    .get(getMenuOfParent);

router.route('/:id_menu/visible')
    .put(updateMenuVisible);

export default router;