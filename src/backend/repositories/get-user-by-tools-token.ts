import {IUser} from '../../common/types/user.js';
import {prisma} from '../../libs/prisma.js';
import {packUser} from './pack-user.js';

/**
 * ミス廃トークンからユーザーを取得します。
 * @param token ミス廃トークン
 * @returns ユーザー
 */
export const getUserByToolsToken = (token: string): Promise<IUser | null> => {
  return prisma.user.findFirst({where: {misshaiToken: token}}).then(packUser);
};
