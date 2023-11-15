import path from 'path';
import url from 'url';
import fs from 'fs';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const config = Object.freeze(JSON.parse(fs.readFileSync(__dirname + '/../config.json', 'utf-8')));

export const meta: MetaJson = Object.freeze(JSON.parse(fs.readFileSync(__dirname + '/meta.json', 'utf-8')));

export type MetaJson = {
  version: string;
};

export type Config = {
	port: number;
	url: string;
	uaExtra: string;
	db: {
		host: string;
		port: number;
		user: string;
		pass: string;
		db: string;
		extra: {
			extra?: { [x: string]: string };
		};
	};
	admin: {
		username: string
		host: string;
	};
};
