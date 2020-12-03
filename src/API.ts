const HOST = "http://localhost:3000";

export class API {

	static async getUser() {
		return this.get("/users");
	}

	private static async get(url: string) {
		const res = await fetch(`${HOST}${url}`);
		return await res.json();
	}

}