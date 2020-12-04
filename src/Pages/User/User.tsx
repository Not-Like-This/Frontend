import React, { Component } from "react";
import { Container, Row, Col, CardGroup, Card } from "react-bootstrap";
import { API, APIUser } from "../../API";
import { AppBar } from "../../Components/AppBar";
import { DateTime } from "luxon";

interface UserState {
	user: APIUser;
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

	getFullName() {
		return `${this.state.user.firstName} ${this.state.user.lastName}`;
	}

	getLoadingIndicator() {
		return (
			<div>
				<AppBar />
				<p>Profil</p>
				<p>Name: {this.getFullName()}</p>
				<p>Birthdata: {this.state.user.birthDate.toLocaleString()}</p>
				<p>Email: {this.state.user.email}</p>

				<Row className="ml-4 mr-4 d-flex justify-content-between">
					<CardGroup>
						<Card
							style={{ textAlign: "center" }}
							onClick={(e: any) => console.log("Click on clard")}
						>
							<Card.Body>
								<Card.Title>Mes rapports</Card.Title>
							</Card.Body>
						</Card>
						<Card
							onClick={(e: any) => console.log("Click on clard")}
						>
							<Card.Body>
								<Card.Title>
									Changer mon mot de passe
								</Card.Title>
							</Card.Body>
						</Card>
						<Card
							onClick={(e: any) => console.log("Click on clard")}
						>
							<Card.Body>
								<Card.Title>Déconnection</Card.Title>
							</Card.Body>
						</Card>
					</CardGroup>
				</Row>
			</div>
		);
	}
}
