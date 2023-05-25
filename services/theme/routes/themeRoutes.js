import express from 'express';
import themeController from '../controllers/themeController.js';

const router = express.Router();

router.get('/', themeController.getAllThemes);
router.get('/:id', themeController.getTheme);
router.post('/', themeController.createTheme);
router.put('/:id', themeController.updateTheme);
router.delete('/:id', themeController.deleteTheme);

export default router;
