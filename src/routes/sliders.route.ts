import { Router } from 'express';

import { getSliders, getSlidersVisibles, getOneSlider, updateSliderVisible, updateSlider, deleteSlider, createSlider } from '../controllers/sliders.controller';

import multer from '../libs/multer';

const router = Router();

router.route('/')
    .get(getSliders)
    .post(multer.single('imagen'),createSlider);

router.route('/visibles')
    .get(getSlidersVisibles);

router.route('/:id_slider')
    .get(getOneSlider)
    .put(multer.single('imagen'),updateSlider)
    .delete(deleteSlider);

router.route('/:id_slider/visible')
    .put(updateSliderVisible);

export default router;