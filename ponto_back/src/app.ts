import express from 'express';
import bodyParser from 'body-parser';
import clockingRoutes from './routes';
import cors from 'cors';

const app = express();

app.use(cors({
    methods: ['GET', 'POST'],
}));

app.use(bodyParser.json());
app.use('/clockings', clockingRoutes);

export default app;
