import { get, post } from './apiService';

export interface IDBCredentials {
  host: string;
  port: number;
  user: string;
  password: string;
}

class DatabaseService {
  static async connect() {
    try {
      return await post('database/connect', {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT as unknown as number,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
      });
    } catch (e) {
      throw e;
    }
  }

  static async retrieveAllDatabase() {
    try {
      const response = await get('/database/all');
      return response.data;
    } catch (e) {
      throw e;
    }
  }

  static async useDatabase(database: string) {
    try {
      const response = await get(`/database/use/${database}`)
      return response.data
    } catch (e) {
      throw e;
    }
  }
}

export default DatabaseService;
