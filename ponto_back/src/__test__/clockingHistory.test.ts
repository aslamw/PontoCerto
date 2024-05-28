import request from 'supertest';
import { sequelize } from '../models';
import app from '../app';
import { Server } from 'http';
import ClockingHistory from '../models/clockingHistory';

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
  it('should create a clocking and log to history', async () => {
    await request(app)
      .post('/clockings')
      .send({ userId: 'marcosw9'});
      
    const response = await request(app)
      .post('/clockings/ponto')
      .send({ userId: 'marcosw9', type: 'start' });

    expect(response.status).toBe(201);

    const history = await ClockingHistory.findOne({ where: { userId: 'marcosw9', type: 'start' } });
    expect(history).not.toBeNull();
  });

});
