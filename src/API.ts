import { DateTime } from 'luxon';
const HOST = "http://localhost:3000";

export class API {

	static async getUser() {
		const user = await this.get("/users");
		return new APIUser(user);
	}

	private static async get(url: string) {
		const res = await fetch(`${HOST}${url}`);
		return await res.json();
	}

	static async getSpots() {
		return await this.get("/spots");
	}
}

export class APIUser {

	firstName: string;
	lastName: string;
	birthDate: DateTime;
	email: string;

	constructor(data: any) {
		this.firstName = data.firstName;
		this.lastName = data.lastName;
		this.birthDate = DateTime.fromISO(data.birthDate);
		this.email = data.email;
	}

}