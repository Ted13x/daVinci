import express from 'express';
import priceController from '../controllers/priceController.js';

const router = express.Router();

router.get('/', priceController.getAllPrices);
router.get('/:id', priceController.getPrice);
router.post('/', priceController.createPrice);
router.put('/:id', priceController.updatePrice);
router.delete('/:id', priceController.deletePrice);

export default router;
