import React, { Component } from "react";
import {
	Container,
	Row,
	Form,
	Col,
	Button,
	InputGroup,
	CardGroup,
	Card,
	Table,
} from "react-bootstrap";
import { AppBar } from "../../Components/AppBar";

export class HomePage extends Component {
	render() {
		return (
			<div>
				<AppBar />
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
							<Card
								onClick={(e: any) =>
									console.log("Click on clard")
								}
							>
								<Card.Body>
									<Card.Title>Faire un rapport</Card.Title>
								</Card.Body>
							</Card>
							<Card
								onClick={(e: any) =>
									console.log("Click on clard")
								}
							>
								<Card.Body>
									<Card.Title>Spots favoris</Card.Title>
								</Card.Body>
							</Card>
							<Card
								onClick={(e: any) =>
									console.log("Click on clard")
								}
							>
								<Card.Body>
									<Card.Title>Liste des spots</Card.Title>
								</Card.Body>
							</Card>
							<Card>
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
			</div>
		);
	}
}
