import express from 'express';
import bodyParser from 'body-parser';
import clockingRoutes from './routes';

const app = express();

app.use(bodyParser.json());
app.use('/clockings', clockingRoutes);

export default app;
