import { Request, Response } from 'express';
import ClockingHistory from '../models/clockingHistory';
import Clocking from '../models/clocking';

class ClockingHistoryController {
  public async createHistory(req: Request, res: Response): Promise<Response> {
    const { userId, type } = req.body;

    const now = new Date();

    const day = (`0${now.getDate()}`).slice(-2);
    const month = (`0${now.getMonth()+1}`).slice(-2);
    const year = now.getFullYear();

    const hours = now.getHours();
    const minutes = now.getMinutes();

    const formattedTime = `${day}/${month}/${year} ${hours}:${minutes}`;

    if (!['start', 'end'].includes(type)) {
      return res.status(400).json({ error: 'tipo inválido' });
    }

    const clocking = await Clocking.findOne({
      where: {
        userId,
        
      },
    });
    if (!clocking){
      return res.status(404).json({'msg':'não encontrado'});
    }

    await ClockingHistory.create({
      userId,
      type,
      timestamp: formattedTime,
    });

    return res.status(201).json(ClockingHistory);
  }
  public async getAllHystory(req: Request, res: Response): Promise<Response> {
    const { userId } = req.body;

    const clocking = await Clocking.findOne({
      where: {
        userId,
        
      },
    });
    if (!clocking){
      return res.status(404).json({'msg':'não encontrado'});
    }

    const historys = await ClockingHistory.findAll({
      where: {
        userId
      },
    });

    return res.json(historys);
  }

  public async getTypeHystory(req: Request, res: Response): Promise<Response> {
    const { userId, type } = req.body;

    if (!['start', 'end'].includes(type)) {
      return res.status(400).json({ error: 'tipo inválido' });
    }

    const clocking = await Clocking.findOne({
      where: {
        userId,
        
      },
    });
    if (!clocking){
      return res.status(404).json({'msg':'não encontrado'});
    }

    const historys = await ClockingHistory.findAll({
      where: {
        userId,
        type
      },
    });

    return res.json(historys);
  }

}
export default new ClockingHistoryController();
