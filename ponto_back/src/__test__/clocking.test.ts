import request from 'supertest';
import { sequelize } from '../models';
import app from '../app';
import { Server } from 'http';
import Clocking from '../models/clocking';

let server: Server;

beforeAll(async () => {
  await sequelize.sync({ force: true });
  server = app.listen();
});

afterAll(async () => {
  await sequelize.close();
  server.close();
});

describe('Clocking API', () => {
  it('should create a clocking', async () => {
    const response = await request(app)
      .post('/clockings')
      .send({ userId: 'marcosw9'});

    const clocking = await Clocking.findOne({
      where: {
        userId: 'marcosw9'
        
      }
    });

    expect(response.status).toBe(201);
    expect(clocking?.userId).toBe('marcosw9');

  });

  it('get all', async () => {

    const response = await request(app).get('/clockings/total');

    expect(response.status).toBe(200);
  });

  it(' get by id', async () => {
    const response = await request(app).get('/clockings/id/marcosw9');

    expect(response.status).toBe(200);
  });
});
