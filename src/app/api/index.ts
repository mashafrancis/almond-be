import { Router } from 'express';
import role from './routes/role';
import schedules from './routes/schedule';
import auth from './routes/auth';
import user from './routes/user';
import agendash from './routes/agendash';
import device from './routes/device';
import linkAccount from './routes/linkAccount';
import dashboard from './routes/dashboard';
import recover from './routes/recover';

// guaranteed to get dependencies
export default (): Router => {
	const app = Router();
	schedules(app);
	auth(app);
	user(app);
	agendash(app);
	device(app);
	linkAccount(app);
	role(app);
	dashboard(app);
	recover(app);
	return app;
};
