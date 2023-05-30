import express from 'express';
import productController from '../controllers/productController.js';

const router = express.Router();

// Middleware to log incoming requests
router.use((req, res, next) => {
    console.log(`Received request at ${req.originalUrl}`);
    next();
  });

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProduct);
router.post('/create', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

export default router;
