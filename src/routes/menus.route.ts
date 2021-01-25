import { Router } from 'express';

import { getMenus} from '../controllers/menus.controller';



const router = Router();

router.route('/')
    .get(getMenus);

export default router;