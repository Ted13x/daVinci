import express from 'express';
import cartController from '../controllers/cartController.js';

const router = express.Router();

router.get('/', cartController.getAllCarts);
router.get('/:id', cartController.getCart);
router.post('/', cartController.createCart);
router.put('/:id', cartController.updateCart);
router.delete('/:id', cartController.deleteCart);

export default router;
