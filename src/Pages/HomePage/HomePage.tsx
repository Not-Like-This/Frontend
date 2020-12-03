import React, { Component } from "react";
import { Container, Col, Row, Form, Card, Navbar } from "react-bootstrap";

export class HomePage extends Component {
	render() {
		return (
			<Container fluid className="min-100">
				<Navbar bg="primary">
					<Navbar.Brand href="#home" className="justify-content-right">
						<img
							alt=""
							src="/logo-64.jpg"
							width="30"
							height="30"
							className="d-inline-block align-top"
						/>
						Clean Waves
					</Navbar.Brand>
				</Navbar>

				{/* <Row>
					<Col sm={8}>
						<Row className="d-flex justify-content-center">
							<Form inline>
								<button
									className="btn btn-outline- ml-2"
									type="submit"
								>
									Search
								</button>
								<input
									type="text"
									placeholder="Search.."
									id="mainSearchBar"
								></input>
							</Form>
						</Row>
						<Row className="align-self-center">
							<Card>
								<Card.Body>
									<Card.Title>Faire un signalement</Card.Title>
								</Card.Body>
							</Card>
							<Card>
								<Card.Body>
									<Card.Title>Spots favoris</Card.Title>
								</Card.Body>
							</Card>
							<Card>
								<Card.Body>
									<Card.Title>Prévisions météos</Card.Title>
								</Card.Body>
							</Card>
						</Row>
					</Col>
					<Col sm={4}>
						<Row>
							<img src="/logo-64.jpg"></img>
							<p>Clean Waves</p>
						</Row>
					</Col>
				</Row> */}
			</Container>
		);
	}
}
