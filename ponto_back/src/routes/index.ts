import { Router } from 'express';
import clockingController from '../controllers/clocking';
import clockingHistory from '../controllers/clockingHistory';

const router = Router();

router.get('/:userId/today', clockingController.getCurrentDayClockings);
router.post('/', clockingController.createClocking);
router.get('/:userId/total', clockingController.getPreviousDaysTotal);
router.post('/ponto', clockingHistory.createHistory);
router.get('/ponto/all', clockingHistory.getAllHystory);

export default router;
