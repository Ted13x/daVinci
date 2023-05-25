import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
  
    if (authHeader) {
      const token = authHeader.split(' ')[1];
  
      jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
          return res.sendStatus(403);
        }
  
        req.user = user;
        next();
      });
    } else {
      res.sendStatus(401);
    }
  };

  
// router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUser);
router.post('/authenticate', authenticate, userController.authenticateUser);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;
