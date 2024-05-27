import { Request, Response } from 'express';
import { Op } from 'sequelize';
import Clocking from '../models/clocking';

class ClockingController {
  public async getCurrentDayClockings(req: Request, res: Response): Promise<Response> {
    const userId = req.params.userId;
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const clockings = await Clocking.findAll({
      where: {
        userId,
        timestamp: {
          [Op.between]: [startOfDay, endOfDay],
        },
      },
    });

    return res.json(clockings);
  }

  public async createClocking(req: Request, res: Response): Promise<Response> {
    const { userId } = req.body;

    const clocking = await Clocking.create({
      userId
    });

    return res.status(201).json(clocking);
  }

  public async getPreviousDaysTotal(req: Request, res: Response): Promise<Response> {
    const userId = req.params.userId;

    const clockings = await Clocking.findAll({
      where: {
        userId,
        timestamp: {
          [Op.lt]: new Date(),
        },
      },
    });

    // Calculate total hours from clockings
    // (this calculation needs to be implemented based on the specific requirements)

    return res.json({ totalHours: clockings });
  }
}

export default new ClockingController();
