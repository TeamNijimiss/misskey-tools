import {getConnection, createConnection, Connection, DataSource} from 'typeorm';
import { Config } from '../../config.js';
import { User } from '../models/entities/user.js';
import { UsedToken } from '../models/entities/used-token.js';
import { Announcement } from '../models/entities/announcement.js';

export const entities = [
  User,
  UsedToken,
  Announcement,
];

/**
 * データベース接続が既に存在すれば取得し、なければ新規作成する
 * @returns 取得または作成したDBコネクション
 * @param config
 */
export function createPostgresDataSource(config: Config) {
  return new DataSource({
    type: 'postgres',
    host: config.db.host,
    port: config.db.port,
    username: config.db.user,
    password: config.db.pass,
    database: config.db.db,
    extra: config.db.extra,
    entities,
  });
}
