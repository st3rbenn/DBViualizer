import { NextFunction, Request, Response } from 'express';

export const getHealth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(200).json({
      message: 'healthy ✅',
    });
  } catch (e) {
    return res.status(500).json({
      message: 'error',
      error: 'Something went wrong, please try again later ' + e,
    });
  }
}