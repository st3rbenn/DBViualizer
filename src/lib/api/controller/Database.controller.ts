import { NextFunction, Request, Response } from 'express';
import { DBConnection } from '../../database/DBConnection';
import { execSync } from 'child_process';

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
      return res.status(406);
    }

    await DBConnection.createInstance(dbCredentials).connectToMySQL();

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

    const result = await dbInstance.getAllDatabase();

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

    const result = await dbInstance.getAllTablesFromDatabase(database);

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
  try {
    const dbInstance = DBConnection.instance;

    if (!dbInstance)
      return res.status(406).json({
        message: 'error disconnect to database ⛔️',
        error: 'no database instance found, please connect to database first 🙏',
      });

      const getServerInformation = await dbInstance.getServerInformations();

      const output = execSync('tsc --version');
      const typescriptVersion = output.toString().trim().split(' ')[1];

      getServerInformation.SoftwareInformation.typescriptVersion = typescriptVersion;

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

export const useDatabase = async (req: Request, res: Response) => {
  try {
    const dbInstance = DBConnection.instance;

    // console.log('INSTANCE', dbInstance)

    // if(!dbInstance) {
    //   return res.status(406).json({
    //     message: 'error while trying to use database',
    //     eror: 'no database instance found, please connect to database first 🙏'
    //   })
    // }

    const {database} = req.params;

    await dbInstance.useDatabase(database)

    return res.status(200).json({
      message: `Current database in use : ${database}`,
    });
  } catch (e) {
    return res.status(500).json({
      message: 'error use database',
      error: 'Something went wrong, please try again later : ' + e,
    })
  }
}
