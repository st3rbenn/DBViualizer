import { OkPacket, RowDataPacket } from 'mysql2';

export type DbDefaults = RowDataPacket[] | RowDataPacket[][] | OkPacket[] | OkPacket;
export type DbQueryResult<T> = T & DbDefaults;
