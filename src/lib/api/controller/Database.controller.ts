import { Request, Response } from 'express';
import { DBConnection } from '../../database/DBConnection';

export const HelloWorld = (req: Request, res: Response) => {
  return res.status(200).json({
    message: 'helloWorld::-)',
  });
};

export const connectToDatabase = async (req: Request, res: Response) => {
  const { host, port, user, password } = req.body;
  try {
    const dbCredentials = {
      host: host,
      port: port,
      user: user,
      password: password,
    };

    const dbInstance = DBConnection.getInstance(dbCredentials);

    await dbInstance.connect();

    return res.status(200).json({
      message: 'Connected ✅',
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: 'error connecting to database',
      error: e,
    });
  }
};

export const retrieveAllDatabase = async (req: Request, res: Response) => {
  try {
    const dbInstance = DBConnection.getInstance();

    if (!dbInstance)
      return res.status(404).json({
        message: 'error connecting to database',
        error: 'no database instance found',
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
