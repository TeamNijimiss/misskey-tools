import { createPostgresDataSource } from '../backend/services/db.js';
import 'reflect-metadata';
import { config } from '../config.js';

(async () => {
  createPostgresDataSource(config);
  await (await import('./calculate-all-rating.worker.js')).default();
})();
