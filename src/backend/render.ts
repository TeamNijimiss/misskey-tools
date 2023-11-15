import views from 'koa-views';
import path from 'path';
import url from 'url';

import { meta } from '../config.js';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const render = views(__dirname + '/views', {
  extension: 'pug',
  options: { version: meta.version },
});
