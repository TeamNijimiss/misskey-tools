import { User } from './entities/user.js';
import { UsedToken } from './entities/used-token.js';
import { Announcement } from './entities/announcement.js';
import { dataSource} from '../../app.js';

export const Users = dataSource.getRepository(User);
export const UsedTokens = dataSource.getRepository(UsedToken);
export const Announcements = dataSource.getRepository(Announcement);
