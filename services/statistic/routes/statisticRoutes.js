import express from 'express';
import statisticController from '../controllers/statisticController.js';

const router = express.Router();

router.get('/', statisticController.getAllStatistics);
router.get('/:id', statisticController.getStatistic);
router.post('/', statisticController.createStatistic);
router.put('/:id', statisticController.updateStatistic);
router.delete('/:id', statisticController.deleteStatistic);

export default router;
