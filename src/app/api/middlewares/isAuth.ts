import jwt from 'express-jwt';
import { config } from '../../../config';
import { AppLogger } from '../../app.logger';

const logger = new AppLogger('isAuth');

/**
 * We are assuming that the JWT will come in a header with the form
 *
 * Authorization: Bearer ${JWT}
 *
 * But it could come in a query parameter with the name that you want like
 * GET https://almond-api.com/stats?apiKey=${JWT}
 * Luckily this API follow _common sense_ ergo a _good design_ and don't allow that ugly stuff
 */
const getTokenFromHeader = (req) => {
	try {
		/**
		 * @TODO Edge and Internet Explorer do some weird things with the headers
		 * So I believe that this should handle more 'edge' cases ;)
		 */
		if (
			(req.headers.authorization &&
				req.headers.authorization.split(' ')[0] === 'Token') ||
			(req.headers.authorization &&
				req.headers.authorization.split(' ')[0] === 'Bearer')
		) {
			return req.headers.authorization.split(' ')[1];
		}
		return null;
	} catch (e) {
		logger.error('🔥 Error getting token from header: %o', e.message);
	}
};

const isAuth = jwt({
	secret: config.session.secret, // The _secret_ to sign the JWTs
	userProperty: 'token', // Use req.token to store the JWT
	algorithms: [config.jwtAlgorithm], // JWT Algorithm
	getToken: getTokenFromHeader, // How to extract the JWT from the request
});

export default isAuth;
