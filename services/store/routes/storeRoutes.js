import express from 'express';
import storeController from '../controllers/storeController.js';

const router = express.Router();

// Middleware to log incoming requests
router.use((req, res, next) => {
    console.log(`Received request at ${req.originalUrl}`);
    next();
  });

router.get('/', storeController.getAllStores);
router.get('/:id', storeController.getStore);
router.post('/create', storeController.createStore);
router.put('/:id', storeController.updateStore);
router.delete('/:id', storeController.deleteStore);

export default router;
