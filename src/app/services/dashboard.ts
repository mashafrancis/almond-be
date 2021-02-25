import { Inject, Service } from 'typedi';
import { AppLogger } from '../app.logger';

@Service()
export default class DashboardService {
	private logger = new AppLogger(DashboardService.name);

	constructor(
		@Inject('userModel') private userModel: Models.UserModel,
		@Inject('deviceModel') private deviceModel: Models.DeviceModel,
	) {}

	public async GetDeviceSummary(): Promise<any> {
		try {
			this.logger.debug(`[COUNT] Getting the number of Devices`);
			return await this.deviceModel.find().count();
		} catch (e) {
			this.logger.error(e.message, e.stack);
			throw e;
		}
	}

	public async GetUsersSummary(): Promise<any> {
		try {
			this.logger.debug(`[COUNT] Getting the number of Users`);
			return await this.userModel.find().count();
		} catch (e) {
			this.logger.error(e.message, e.stack);
			throw e;
		}
	}
}
