import {api} from '../services/misskey/misskey.js';
import {Score} from '../../common/types/score.js';
import {User} from '@prisma/client';
import {MiUser} from '../types/mi-user.js';
import {getDelta} from './get-delta.js';

/**
 * ユーザーのスコアを取得します。
 * @param user ユーザー
 * @returns ユーザーのスコア
 */
export const getScores = async (user: User): Promise<Score> => {
  // TODO 毎回取ってくるのも微妙なので、ある程度キャッシュしたいかも
  const miUser = await api<MiUser>(user.host, 'users/show', { username: user.username }, user.token);

  return {
    notesCount: miUser.notesCount,
    followingCount: miUser.followingCount,
    followersCount: miUser.followersCount,
    ...getDelta(user, miUser),
  };
};

