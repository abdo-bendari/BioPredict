import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

import AppError from './utils/AppError';
import { globalErrorHandler } from './controllers/errorController';
import userRouter from './routes/userRoutes';
import patientRouter from './routes/patientRoutes';
import analysisRouter from './routes/analysisRoutes';
import reportRouter from './routes/reportRoutes';
import medicationRouter from './routes/medicationRoutes';
import dashboardRouter from './routes/dashboardRoutes';
import historyRouter from './routes/historyRoutes';
import { trackHistory } from './middlewares/historyMiddleware';

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// 2) ROUTES
app.use('/api/v1/users', userRouter);
app.use('/api/v1/patients', patientRouter);
app.use('/api/v1/analyses', analysisRouter);
app.use('/api/v1/reports', reportRouter);
app.use('/api/v1/medications', medicationRouter);
app.use('/api/v1/dashboard', dashboardRouter);
app.use('/api/v1/history', historyRouter);

// SERVE FRONTEND IN PRODUCTION
const distPath = path.join(__dirname, '../../dist');
app.use(express.static(distPath));

app.get('*', (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl.startsWith('/api')) {
    return next();
  }
  res.sendFile(path.join(distPath, 'index.html'));
});

// Global history tracking for certain actions (example)
// In a real app, you might apply these selectively in the routes files
// but for this requirement, we can show usage here or in routes.

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export default app;
