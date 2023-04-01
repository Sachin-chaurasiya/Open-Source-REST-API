import { Request, Response, NextFunction } from 'express';
import { RateLimiterMemory } from 'rate-limiter-flexible';

export const rateLimit = new RateLimiterMemory({
  points: 10, // 10 requests
  duration: 10, // per 1 second
  blockDuration: 60, // 1 minute
});

export const rateLimiter = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  rateLimit
    .consume(req.ip)
    .then(() => {
      next();
    })
    .catch(() => {
      res.status(429).json({ error: 'Too Many Requests' });
    });
};
