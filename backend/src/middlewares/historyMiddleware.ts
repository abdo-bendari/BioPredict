import { Response, NextFunction } from 'express';
import History from '../models/historyModel';
import catchAsync from '../utils/catchAsync';

export const trackHistory = (action: string) => {
  return catchAsync(async (req: any, res: Response, next: NextFunction) => {
    // We'll track the action after the response is sent successfully
    res.on('finish', async () => {
      if (res.statusCode >= 200 && res.statusCode < 300) {
        try {
          await History.create({
            user: req.user?._id,
            action,
            details: {
              method: req.method,
              url: req.originalUrl,
              params: req.params,
              body: action === 'login' ? { email: req.body.email } : req.body
            }
          });
        } catch (err) {
          console.error('History tracking failed:', err);
        }
      }
    });
    next();
  });
};

export const getUserHistory = catchAsync(async (req: any, res: Response, next: NextFunction) => {
  const history = await History.find({ user: req.user._id }).sort({ timestamp: -1 });

  res.status(200).json({
    status: 'success',
    results: history.length,
    data: {
      history
    }
  });
});
