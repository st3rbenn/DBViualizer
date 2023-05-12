import { RowDataPacket, createPool, Pool, Connection, PoolConnection } from 'mysql2/promise';

interface IDBConnectionCredentials {
  host: string;
  user: string;
  password: string;
  port: number;
}

interface IServerInformation {
  MySQLServerInformation: {
    basedir: string;
    character_set_server: string;
    default_storage_engine: string;
    ip: string;
    port: number;
    user: string;
  };
  SoftwareInformation: {
    nodeVersion: string;
    typescriptVersion: string;
  };
}

type PartialServerInformation = {
  [key in keyof IServerInformation]?: IServerInformation[key];
};

export class DBConnection {
  private static _instance: DBConnection;
  private static _pool: Pool | null = null;
  private static _connection: Connection | null = null;
  private static _currentDatabase: any;

  private static _host: string;
  private static _user: string;
  private static _password: string;
  private static _port: number;

  public static get currentDatabase(): any {
    return this._currentDatabase;
  }

  public static set currentDatabase(value: any) {
    this._currentDatabase = value;
  }

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

  public async connectToMySQL(): Promise<void> {
    try {
      console.log('Connecting to database... 😴');
      if (!DBConnection.pool) {
        throw new Error('Pool is not initialized');
      }
      DBConnection.connection = await DBConnection.pool.getConnection();
    } catch (e) {
      console.log('Something went wrong while connecting to database', e);
    }
  }

  public async closeConnection() {
    DBConnection.connection.destroy();
  }

  public async closePool() {
    await DBConnection.pool.end();
    DBConnection.instance = null;
  }

  public static async executeQuery(query: string, params?: any[]): Promise<any> {
    if (!DBConnection.connection) {
      throw new Error('Connection is not established');
    }
    const [rows] = await DBConnection.connection.execute(query, params);
    return rows;
  }

  public static async executeMultipleQueries(queries: string[]): Promise<any> {
    if (!DBConnection.connection) {
      throw new Error('Connection is not established');
    }
    console.log('Executing queries...');
    console.log(queries);
    const [rows] = await DBConnection.connection.query(queries.join(''));
    return rows;
  }

  public async getAllDatabase(): Promise<string[]> {
    if (!DBConnection.connection) {
      throw new Error('Connection is not established');
    }
    return await DBConnection.executeQuery('SHOW DATABASES;');
  }

  public async getAllTablesFromDatabase(databaseName: string): Promise<string[]> {
    if (!DBConnection.connection) {
      throw new Error('Connection is not established');
    }
    return await DBConnection.executeQuery(`SHOW TABLES FROM ${databaseName};`);
  }

  public static checkIfInstanceExists(): boolean {
    return DBConnection.instance ? true : false;
  }

  public async getServerInformations() {
    if (!DBConnection.connection) {
      throw new Error('Connection is not established');
    }

    const serverInfoQuery =
      'SELECT (SELECT @@global.port) AS port, (SELECT @@global.default_storage_engine) AS default_storage_engine, (SELECT @@global.basedir) AS basedir, (SELECT @@global.character_set_server) AS character_set_server, (SELECT SUBSTRING_INDEX(USER(), "@", -1)) AS ip, (SELECT user()) AS user;';

    const nodeVesion = process.version;

    const [res] = await DBConnection.executeQuery(serverInfoQuery);

    const serverInfo: PartialServerInformation = {
      MySQLServerInformation: { ...res },
      SoftwareInformation: {
        nodeVersion: nodeVesion,
        typescriptVersion: '',
      },
    };

    return serverInfo;
  }

  public async useDatabase(database: string) {
    if (!DBConnection.connection) {
      throw new Error('Connection is not established');
    }

    try {
      console.log('ICICICICICIIC');
      await DBConnection.connection.changeUser({ database });

      console.log('DATABASE', database);
    } catch (e) {
      console.log('ERROR', e);
    }
  }
}
