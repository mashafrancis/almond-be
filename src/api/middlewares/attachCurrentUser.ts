import { Container } from 'typedi';
import * as mongoose from 'mongoose';
import { IUser } from '../../interfaces/IUser';
import { AppLogger } from '../../loaders/logger';
import AuthService from '../../services/auth';

const logger = new AppLogger('CurrentUser');

/**
 * Attach user to req.user
 * @param {*} req Express req Object
 * @param {*} res  Express res Object
 * @param {*} next  Express next Function
 */
const attachCurrentUser = async (req, res, next) => {
  try {
    const UserModel = Container.get('userModel') as mongoose.Model<IUser & mongoose.Document>;
    const userRecord = await UserModel.findById(req.token._id);
    if (!userRecord) {
      return res.sendStatus(401);
    }
    const currentUser = userRecord.toObject();
    Reflect.deleteProperty(currentUser, 'password');
    Reflect.deleteProperty(currentUser, 'salt');
    req.currentUser = currentUser;
    return next();
  } catch (e) {
    logger.error('🔥 Error attaching user to req: %o', e.stack);
    return next(e);
  }
};

export default attachCurrentUser;
