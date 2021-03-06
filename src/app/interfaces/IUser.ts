import { IDevice } from './IDevice';

export interface IUser {
	_id?: string;
	firstName: string;
	lastName: string;
	email: string;
	password?: string;
	salt?: string;
	photo?: string;
	isVerified?: boolean;
	googleId?: string;
	verificationToken?: string;
	roles?: Role[] | string[];
	currentRole?: string;
	devices?: Device[];
	activeDevice?: IDevice | string;
}

export interface IUserInputDTO {
	firstName: string;
	lastName: string;
	email: string;
	password?: string;
	photo?: string;
	isVerified?: boolean;
	roles?: Role[] | string[];
	role?: string;
}

export interface IProfile extends IUser {
	id: string;
	_json: {
		id: string;
		given_name: string;
		family_name: string;
		photo: string;
		email: string;
		picture: string;
		email_verified: boolean;
	};
}

interface Role {
	title?: string;
	_id?: string;
}

interface Device {
	_id: string;
	id: string;
	verified: boolean;
}
