import React, { Component } from "react";
import { AppBar } from "../../Components/AppBar";
import { Container } from "react-bootstrap";

export class HomePage extends Component {
	render() {
		return (
			<Container fluid className="min-100">
				<AppBar />
			</Container>
		);
	}
}
