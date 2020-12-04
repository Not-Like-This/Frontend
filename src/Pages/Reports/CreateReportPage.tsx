import React, { Component } from "react";
import {
	Container,
	Col,
	Row,
	Button,
	ButtonGroup,
	Form,
} from "react-bootstrap";
import { AppBar } from "../../Components/AppBar";

export class CreateReportPage extends Component {
	sendReport() {

		const report = {
			city: this.getFormElement("nameSpot").value,
			spotName: this.getFormElement("city").value,
			bathersAmount: 1,
			practicingSportsAmount: 0,
			boatAmount: 1,
			solarCream: false,
			perfume: false,
			hydratingCream: true,
			makeup: false,
			gasoline: false,
			cigarettes: false,
			fertilizer: false,
			paint: false,
		};
	}

	getFormElement(id: string) {
		return document.getElementById(id) as HTMLInputElement;
	}

	render() {
		return (
			<Container fluid className="min-100">
				<AppBar />
				<form>
					<Form className="">
						<Col sm={4}>
							<h4>Signalement :</h4>
							<br />
							<Row>
								Ville :
								<input
									type="text"
									id="city"
									name="city"
								></input>
							</Row>
							<Row>
								Lieu :
								<input
									type="text"
									id="nameSpot"
									required
								></input>
							</Row>
							<Row>
								Date :
								<input
									type="date"
									id="dateSession"
									name="dateSession"
								></input>
							</Row>
							<Row>
								Heure de début de la session :
								<input
									type="number"
									id="hourBeginningSession"
									min="0"
									max="23"
								></input>
								h
								<input
									type="number"
									id="minuteBeginningSession"
									min="0"
									max="59"
								></input>
							</Row>
							<Row>
								Heure de fin de la session :
								<input
									type="number"
									id="hourEndSession"
									min="0"
									max="23"
								></input>
								h
								<input
									type="number"
									id="minuteEndSession"
									min="0"
									max="59"
								></input>
							</Row>
							<Row>
								Qualité de l'eau :
								<ButtonGroup toggle>
									<Button variant="secondary">Elevé</Button>
									<Button variant="secondary">Moyen</Button>
									<Button variant="secondary">Bas</Button>
									<Button variant="secondary">Aucun</Button>
								</ButtonGroup>
							</Row>
							<Row>
								Nombre de baigneurs :
								<ButtonGroup toggle>
									<Button variant="secondary">Elevé</Button>
									<Button variant="secondary">Moyen</Button>
									<Button variant="secondary">Bas</Button>
									<Button variant="secondary">Aucun</Button>
								</ButtonGroup>
							</Row>
							<Row>
								Nombre de surfeurs :
								<ButtonGroup toggle>
									<Button variant="secondary">Elevé</Button>
									<Button variant="secondary">Moyen</Button>
									<Button variant="secondary">Bas</Button>
									<Button variant="secondary">Aucun</Button>
								</ButtonGroup>
							</Row>
							<Row>
								Nombre de bateaux :
								<ButtonGroup toggle>
									<Button variant="secondary">Elevé</Button>
									<Button variant="secondary">Moyen</Button>
									<Button variant="secondary">Bas</Button>
									<Button variant="secondary">Aucun</Button>
								</ButtonGroup>
							</Row>
							<Row>
								Note :{" "}
								<select
									name="comboboxRating"
									id="comboboxRating"
								>
									<option value="0">0</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
								</select>
							</Row>
						</Col>
						<Col sm={4}>
							<Row>
								<Form.Check
									type="checkbox"
									label="Crème solaire"
								/>
							</Row>
							<Row>
								<Form.Check
									type="checkbox"
									label="Parfum / déodorants"
								/>
							</Row>
							<Row>
								<Form.Check
									type="checkbox"
									label="Crème hydratante"
								/>
							</Row>
							<Row>
								<Form.Check
									type="checkbox"
									label="Maquillage"
								/>
							</Row>
							<Row>
								<Form.Check type="checkbox" label="Essence" />
							</Row>
							<Row>
								<Form.Check
									type="checkbox"
									label="Cigarettes"
								/>
							</Row>
							<Row>
								<Form.Check
									type="checkbox"
									label="Engrais / Fertilisants"
								/>
							</Row>
							<Row>
								<Form.Check type="checkbox" label="Peinture" />
							</Row>
							<Button onClick={(e) => this.sendReport()}>
								Envoyer le signalement
							</Button>
						</Col>
					</Form>
				</form>
			</Container>
		);
	}
}
