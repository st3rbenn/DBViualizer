import { PoolConnection, PoolOptions, Connection } from 'mysql2';
import { Query, RowDataPacket, createPool } from 'mysql2/promise';

interface IDBConnectionCredentials {
  host: string;
  user: string;
  password: string;
  port: number;
}

export class DBConnection {
  private static instance: DBConnection;
  private static pool: any;
  private static connection: PoolConnection;

  private static host: string;
  private static user: string;
  private static password: string;
  private static port: number;

  private constructor(credentials: IDBConnectionCredentials) {
    DBConnection.host = credentials.host;
    DBConnection.user = credentials.user;
    DBConnection.password = credentials.password;
    DBConnection.port = credentials.port;
    DBConnection.pool = createPool({
      host: DBConnection.host,
      user: DBConnection.user,
      password: DBConnection.password,
      port: DBConnection.port,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }

  public static getInstance(credentials?: IDBConnectionCredentials) {
    if (!credentials && !DBConnection.instance) {
      return null;
    }

    if (!DBConnection.instance) {
      DBConnection.instance = new DBConnection(credentials);
    }
    return DBConnection.instance;
  }

  public async connect(): Promise<any> {
    console.log('Connecting to database... 😴');
    DBConnection.connection = await DBConnection.pool.getConnection();
    console.log('Connected to database 😎');
  }

  public async closeConnection() {
    DBConnection.connection.release();
  }

  public async closePool() {
    await DBConnection.pool.end();
  }

  public async executeQuery(query: string, params?: any[]): Promise<any> {
    const [rows] = await DBConnection.connection.execute(query, params);
    return rows;
  }

  public async getAllDatabaseNames(): Promise<string[]> {
    const [rows] = await DBConnection.pool.execute('SHOW DATABASES');
    console.log(rows);
    return rows.map((row: RowDataPacket) => row.Database);
  }
}
