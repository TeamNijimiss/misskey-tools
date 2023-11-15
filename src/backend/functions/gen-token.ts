import rndstr from 'rndstr';
import { UsedToken } from '../models/entities/used-token.js';
import { UsedTokens } from '../models/index.js';

/**
 * トークンを生成します
 */
export const genToken = async (): Promise<string> => {
  let used: UsedToken | null = null;
  let token: string;
  do {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    token = rndstr(32);
    used = await UsedTokens.findOneBy({ token });
  } while (used !== undefined);
  return token;
};
