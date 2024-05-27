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
    const response = await request(app)
      .post('/clockings')
      .send({ userId: 1, type: 'start' });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('userId', 1);
    expect(response.body).toHaveProperty('type', 'start');

    const history = await ClockingHistory.findOne({ where: { userId: 1, type: 'start' } });
    expect(history).not.toBeNull();
  });

  it('should get current day clockings', async () => {
    await request(app)
      .post('/clockings')
      .send({ userId: 1, type: 'start' });

    const response = await request(app).get('/clockings/1/today');

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should get previous days total hours', async () => {
    const response = await request(app).get('/clockings/1/total');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('totalHours');
  });
});
