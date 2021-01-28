import { Router } from 'express';

import { createMenu, deleteMenu, getMenuOfParent, getMenus, updateMenuNombre, updateMenuPosicion, updateMenuVisible} from '../controllers/menus.controller';



const router = Router();

router.route('/')
    .get(getMenus)
    .post(createMenu);

router.route('/:id_menu')
    .delete(deleteMenu);

router.route('/parent/:id_parent')
    .get(getMenuOfParent);

router.route('/:id_menu/visible')
    .put(updateMenuVisible);

router.route('/:id_menu/nombre')
    .put(updateMenuNombre);

router.route('/:id_menu/posicion')
    .put(updateMenuPosicion);


export default router;