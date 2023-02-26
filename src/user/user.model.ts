export class UserModel {
	_id: number;
	email: string;
	passwordHash: string;
	firstName?: string;
	familyName?: string;
}
