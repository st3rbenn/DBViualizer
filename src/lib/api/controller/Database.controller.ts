import { NextFunction, Request, Response } from 'express';
import { DBConnection } from '../../database/DBConnection';

export const connectToDatabase = async (req: Request, res: Response, next: NextFunction) => {
  const { host, port, user, password } = req.body;
  try {
    const dbCredentials = {
      host: host,
      port: port,
      user: user,
      password: password,
    };

    const isInstanceExist = DBConnection.instance;

    if (isInstanceExist) {
      return res.status(406).json({
        message: 'Already connected to database 🚧',
      });
    }

    const dbInstance = DBConnection.createInstance(dbCredentials);

    console.log('ICICIIIIII');

    await dbInstance.connect();

    return res.status(200).json({
      message: 'Connected to MySQL database ✅',
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: 'error connecting to database',
      error: e,
    });
    next();
  }
};

export const retrieveAllDatabase = async (req: Request, res: Response) => {
  try {
    const dbInstance = DBConnection.instance;

    if (!dbInstance)
      return res.status(406).json({
        message: 'error retrieving all databases ⛔️',
        error: 'no database instance found, please connect to database first 🙏',
      });

    const query = 'SHOW DATABASES';

    const result = await dbInstance.executeQuery(query);

    return res.status(200).json({
      message: 'Retrieved all databases ✅',
      result: result,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: 'error retrieving all databases',
      error: e,
    });
  }
};

export const disconnectDatabase = async (req: Request, res: Response) => {
  try {
    const dbInstance = DBConnection.instance;

    if (!dbInstance)
      return res.status(406).json({
        message: 'error disconnect to database ⛔️',
        error: 'no database instance found, please connect to database first 🙏',
      });

    await dbInstance.closePool();
    await dbInstance.closeConnection();

    return res.status(200).json({
      message: 'Disconnected ✅',
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: 'error while disconnect database',
      error: e,
    });
  }
};
