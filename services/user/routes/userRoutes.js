import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

// specific routes
router.get('/checkAuth', userController.checkAuth);
router.post('/authenticate', userController.authenticateUser);
router.post('/register', userController.registerUser);
router.get('/logout', userController.logoutUser);

// generic routes
router.get('/:id', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;
