import { DateTime } from "luxon";
const HOST = "http://51.158.79.247:3000";

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

	static async login(body: any) {
		return await this.post("/users/login", body);
	}

	static async register(body: any) {
		return await this.post("/users", body);
	}

	static async post(url: string, obj: any) {
		const res = await fetch(`${HOST}${url}`, {
			method: "post",
			body: JSON.stringify(obj),
			headers: {
				"Content-Type": "application/json"
			}
		});
		return await res.json();
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
