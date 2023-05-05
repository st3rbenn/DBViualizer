import { get, post } from './apiService';

interface IDBCredentials {
  host: string;
  port: number;
  user: string;
  password: string;
}

class DatabaseService {
  static async connect(credentials: IDBCredentials) {
    try {
      const { host, port, user, password } = credentials;

      const response = await post('database/connect', {
        host,
        port,
        user,
        password,
      });

      return response;
    } catch (e) {
      throw e;
    }
  };

  static async retrieveAllDatabase() {
    try {
      const response = await get('/database');

      return response;
    } catch (e) {
      throw e;
    }
  }
}

export default DatabaseService;