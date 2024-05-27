import { Request, Response } from 'express';
import ClockingHistory from '../models/clockingHistory';

class ClockingHistoryController {
  public async createHistory(req: Request, res: Response): Promise<Response> {
    const { userId, type } = req.body;

    if (!['start', 'end'].includes(type)) {
      return res.status(400).json({ error: 'Invalid type' });
    }

    await ClockingHistory.create({
      userId,
      type,
      timestamp: new Date(),
    });

    return res.status(201).json(ClockingHistory);
  }
  public async getAllHystory(req: Request, res: Response): Promise<Response> {
    const { userId } = req.body;



    const historys = await ClockingHistory.findAll({
      where: {
        userId
      },
    });

    return res.status(200).json(historys);
  }
}

export default new ClockingHistoryController();
