import { NextFunction, Request, Response } from 'express';
import { DBConnection } from '../../database/DBConnection';

export const connectToDatabase = async (req: Request, res: Response, next: NextFunction) => {
  const { host, port, user, password } = req.body;
  try {
    const dbCredentials = {
      host,
      port,
      user,
      password,
    };

    const isInstanceExist = DBConnection.instance;

    if (isInstanceExist) {
      return res.status(406).json({
        message: 'warning ⚠️',
        error: 'Already connected to database 🚧',
      });
    }

    await DBConnection.createInstance(dbCredentials).connect();

    return res.status(200).json({
      message: 'Connected to MySQL',
    });
  } catch (e) {
    return res.status(500).json({
      message: 'error connecting to database',
      error: 'Something went wrong, please try again later',
    });
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
      data: result,
    });
  } catch (e) {
    return res.status(500).json({
      message: 'error retrieving all databases',
      error: 'Something went wrong, please try again later',
    });
  }
};

export const getTablesFromDatabase = async (req: Request, res: Response) => {
  try {
    const dbInstance = DBConnection.instance;

    if (!dbInstance)
      return res.status(406).json({
        message: 'error retrieving all tables ⛔️',
        error: 'no database instance found, please connect to database first 🙏',
      });

    const { database } = req.params;
    console.log(database);

    const query = `SHOW TABLES FROM ${database}`;

    const result = await dbInstance.executeQuery(query);

    return res.status(200).json({
      message: 'Retrieved all tables ✅',
      data: result,
    });
  } catch (e) {
    return res.status(500).json({
      message: 'error retrieving all tables',
      error: 'Something went wrong, please try again later',
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
      error: 'Something went wrong, please try again later',
    });
  }
};

export const getServersInformations = async (req: Request, res: Response) => {
  console.log("YOOOOOOO")
  try {
    const dbInstance = DBConnection.instance;

    if (!dbInstance)
      return res.status(406).json({
        message: 'error disconnect to database ⛔️',
        error: 'no database instance found, please connect to database first 🙏',
      });

      const getServerInformation = dbInstance.getServerInformations();

      return res.status(200).json({
        message: 'all informations retrived ✅',
        data: getServerInformation
      })
    
  } catch (e) {
    console.log(e)
    return res.status(500).json({
      message: 'error while disconnect database',
      error: 'Something went wrong, please try again later',
    });
  }
};
