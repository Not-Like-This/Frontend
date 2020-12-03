import React, { Component } from "react";
import { API } from "../../API";

interface UserState {
	user: {
		firstName: string;
		lastName: string;
		birthDate: Date
	};
	hasLoaded: boolean;
}

export class User extends Component {
	state: UserState = {
		user: null,
		hasLoaded: false,
	};

	componentDidMount() {
		API.getUser().then((user) =>
			this.setState({
				user,
				hasLoaded: true,
			}),
		);
	}

	render() {
		return this.state.hasLoaded
			? this.getLoadingIndicator()
			: this.renderPage();
	}

	renderPage() {
		return <p>Loading user data...</p>;
	}

	getLoadingIndicator() {
		return (
			<div>
				<p>User data loaded:</p>
				<p>  - Name: {`${this.state.user.firstName} ${this.state.user.lastName}`}</p>
				<p>  - Birthdata: {this.state.user.birthDate}</p>
			</div>
		);
	}
}
