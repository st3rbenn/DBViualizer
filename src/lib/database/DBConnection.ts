import { RowDataPacket, createPool, Pool, Connection, PoolConnection } from 'mysql2/promise';

interface IDBConnectionCredentials {
  host: string;
  user: string;
  password: string;
  port: number;
}

export class DBConnection {
  private static _instance: DBConnection;
  private static _pool: Pool | null = null;
  private static _connection: Connection | null = null;

  private static _host: string;
  private static _user: string;
  private static _password: string;
  private static _port: number;

  public static get instance(): DBConnection {
    return this._instance;
  }

  private static set instance(value: DBConnection) {
    this._instance = value;
  }

  public static get pool(): Pool | null {
    return this._pool;
  }

  private static set pool(value: Pool | null) {
    this._pool = value;
  }

  public static get connection(): Connection | null {
    return this._connection;
  }

  private static set connection(value: Connection | null) {
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

  private constructor(
    credentials: IDBConnectionCredentials = {
      host: 'localhost',
      user: 'root',
      password: '',
      port: 3306,
    },
  ) {
    DBConnection.host = credentials.host;
    DBConnection.user = credentials.user;
    DBConnection.password = credentials.password;
    DBConnection.port = credentials.port;
  }

  public static createInstance(credentials: IDBConnectionCredentials) {
    if (!DBConnection.instance) {
      console.log('Creating new instance...');
      DBConnection.instance = new DBConnection(credentials);
      DBConnection.pool = createPool({
        host: DBConnection.host,
        user: DBConnection.user,
        password: DBConnection.password,
        port: DBConnection.port,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
      });

      console.log('Instance created ✅');
    }
    return DBConnection.instance;
  }

  public async connect(): Promise<void> {
    try {
      console.log('Connecting to database... 😴');
      if (!DBConnection.pool) {
        throw new Error('Pool is not initialized');
      }
      DBConnection.connection = await DBConnection.pool.getConnection();
      console.log('Connected to database 😎');
    } catch (e) {
      console.log('Something went wrong while connecting to database', e);
      throw new Error('Something went wrong while connecting to database', e);
    }
  }

  public async closeConnection() {
    DBConnection.connection.destroy();
  }

  public async closePool() {
    await DBConnection.pool.end();
    DBConnection.instance = null;
  }

  public async executeQuery(query: string, params?: any[]): Promise<any> {
    if (!DBConnection.connection) {
      throw new Error('Connection is not established');
    }
    const [rows] = await DBConnection.connection.execute(query, params);
    return rows;
  }

  public async getAllDatabaseNames(): Promise<string[]> {
    if (!DBConnection.connection) {
      throw new Error('Connection is not established');
    }
    const [rows] = await DBConnection.connection.execute('SHOW DATABASES');
    const databases: string[] = [];
    if (Array.isArray(rows)) {
      rows.forEach((row: any) => {
        if ('Database' in row) {
          databases.push(row.Database);
        }
      });
    }
    return databases;
  }

  public static checkIfInstanceExists(): boolean {
    return DBConnection.instance ? true : false;
  }

  public async getServerInformations() {
    if (!DBConnection.connection) {
      throw new Error('Connection is not established');
    }

    const serverInfoQuery =
      "SHOW GLOBAL VARIABLES WHERE Variable_name LIKE 'port' OR Variable_name LIKE 'default_storage_engine' OR Variable_name LIKE 'basedir' OR Variable_name LIKE 'character_set_server';";

    const getlocalIpServer = 'SELECT SUBSTRING_INDEX(USER(), "@", -1) AS ip;';    

    const getRootUser = 'SELECT user();';
    const nodeVersion = process.versions.node;
  }
}
