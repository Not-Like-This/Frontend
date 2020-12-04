import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import {
	ButtonGroup,
	Container,
	Row,
	Form,
	Navbar,
	Col,
	Button,
	FormGroup,
	InputGroup,
	CardGroup,
	Card,
	Table,
} from "react-bootstrap";
import {
	faFacebook,
	faTwitter,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export class HomePage extends Component {
	render() {
		return (
			<Container fluid className="min-100">
				<Navbar className="bg-info justify-content-between nav-fill" fixed="top">
					<Row>
						<FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
						<FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
						<FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
					</Row>
					<Navbar.Brand
						href="#home"
						className="justify-content-right"
					>
						<img
							alt=""
							src="/logo-64.jpg"
							width="30"
							height="30"
							className="d-inline-block align-top"
						/>
						Clean Waves
					</Navbar.Brand>

					<ButtonGroup>
						<Button>Connexion</Button>
						<Button>Inscription</Button>
					</ButtonGroup>
				</Navbar>
				<Row className="justify-content-center mb-4 mt-1">
					<Form inline>
						<InputGroup>
							<Button variant="outline-dark" type="submit">
								Recherche
							</Button>
							<input
								type="text"
								placeholder="Spots, évènements, ..."
								id="mainSearchBar"
							></input>
						</InputGroup>
					</Form>
				</Row>
				<Row>
					<Col sm={9} className="mt-5">
						<CardGroup>
							<Card onClick={(e: any) => console.log("Click on clard")}>
								<Card.Body>
									<Card.Title>Faire un rapport</Card.Title>
								</Card.Body>
							</Card>
							<Card onClick={(e: any) => console.log("Click on clard")}>
								<Card.Body>
									<Card.Title>Spots favoris</Card.Title>
								</Card.Body>
							</Card>
							<Card onClick={(e: any) => console.log("Click on clard")}>
								<Card.Body>
									<Card.Title>Liste des spots</Card.Title>
								</Card.Body>
							</Card>
							<Card onClick={(e: any) => console.log("Click on clard")}>
								<Card.Body>
									<Card.Title>Profil</Card.Title>
								</Card.Body>
							</Card>
						</CardGroup>
					</Col>
					<Col sm={3}>
						<Table bordered striped>
							<thead>
								<tr>
									<th>Derniers signalements</th>
								</tr>
							</thead>
							<tbody>
								<tr>Spot de l'enfer</tr>
								<tr>Spot de je ne sais ou</tr>
								<tr>Spot pas la</tr>
								<tr>Spot caché</tr>
								<tr>Spot pas trouvé</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
			</Container>
		);
	}
}
