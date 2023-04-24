import { PoolConnection, PoolOptions, Connection } from 'mysql2';
import { Query, RowDataPacket, createPool } from 'mysql2/promise';

interface IDBConnectionCredentials {
  host: string;
  user: string;
  password: string;
  port: number;
}

export class DBConnection {
  private static _instance: DBConnection;
  private static _pool: any;
  private static _connection: PoolConnection;

  private static _host: string;
  private static _user: string;
  private static _password: string;
  private static _port: number;

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

  public static get instance(): DBConnection {
    return this._instance;
  }

  private static set instance(value: DBConnection) {
    this._instance = value;
  }

  public static get pool(): any {
    return this._pool;
  }

  private static set pool(value: any) {
    this._pool = value;
  }

  public static get connection(): PoolConnection {
    return this._connection;
  }

  private static set connection(value: PoolConnection) {
    this._connection = value;
  }

  public static get host(): string {
    return this._host;
  }

  private static set host(value: string) {
    this._host = value;
  }

  public static get user(): string {
    return this._user;
  }

  private static set user(value: string) {
    this._user = value;
  }

  public static get password(): string {
    return this._password;
  }

  private static set password(value: string) {
    this._password = value;
  }

  public static get port(): number {
    return this._port;
  }

  private static set port(value: number) {
    this._port = value;
  }

  public static createInstance(credentials: IDBConnectionCredentials) {
    if (!credentials) {
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
    DBConnection.instance = null;
  }

  public async executeQuery(query: string, params?: any[]): Promise<any> {
    const [rows] = await DBConnection.connection.execute(query, params);
    return rows;
  }

  public async getAllDatabaseNames(): Promise<string[]> {
    const [rows] = await DBConnection.pool.execute('SHOW DATABASES');
    return rows.map((row: RowDataPacket) => row.Database);
  }

  public static checkIfInstanceExists(): boolean {
    return DBConnection.instance ? true : false;
  }
}
