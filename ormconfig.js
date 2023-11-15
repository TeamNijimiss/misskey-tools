import { DataSource } from 'typeorm';
import { readFileSync } from 'fs';
import { dirname } from 'path';
import { entities } from './built/backend/services/db.js';
import { fileURLToPath } from 'node:url';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const config = Object.freeze(JSON.parse(readFileSync(`${_dirname}/config.json`, 'utf-8')));

export default new DataSource({
  type: 'postgres',
  host: config.db.host,
  port: config.db.port,
  username: config.db.user,
  password: config.db.pass,
  database: config.db.db,
  extra: config.db.extra,
  entities: entities,
  migrations: ['migration/*.ts'],
});
