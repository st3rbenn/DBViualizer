import { NextFunction, Request, Response } from 'express';

export const _Blank = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(200).json({
      message: '✅',
    });
  } catch (e) {
    return res.status(500).json({
      message: 'error',
      error: 'Something went wrong, please try again later',
    });
  }
}