import { Router } from 'express';
import clockingController from '../controllers/clocking';
import clockingHistory from '../controllers/clockingHistory';

const router = Router();

router.get('/id/:userId/', clockingController.getClockings);
router.post('/', clockingController.createClocking);
router.get('/total', clockingController.getAllClockings);
router.post('/ponto', clockingHistory.createHistory);
router.post('/ponto/total', clockingHistory.getAllHystory);
router.post('/ponto/tipo', clockingHistory.getTypeHystory);

export default router;
