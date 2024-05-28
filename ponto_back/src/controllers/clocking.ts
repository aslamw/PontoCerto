import { Request, Response } from 'express';
import Clocking from '../models/clocking';

class ClockingController {
  public async getClockings(req: Request, res: Response): Promise<Response> {
    const userId = req.params.userId;

    const clocking = await Clocking.findOne({
      where: {
        userId,
        
      },
    });
    if (!clocking){
      return res.status(404).json({'msg':'não encontrado'});
    }

    return res.json(clocking);
  }

  public async createClocking(req: Request, res: Response): Promise<Response> {
    const { userId } = req.body;

    const verify = await Clocking.findOne({
      where: {
        userId,
        
      },
    });
    if (verify){
      return res.status(400).json({'msg':'usuário já existe'});
    }

    const clocking = await Clocking.create({
      userId
    });

    return res.status(201).json(clocking);
  }

  public async getAllClockings(req: Request, res: Response): Promise<Response> {


    const clockings = await Clocking.findAll();

    // Calculate total hours from clockings
    // (this calculation needs to be implemented based on the specific requirements)

    return res.json({ users: clockings });
  }
}

export default new ClockingController();
