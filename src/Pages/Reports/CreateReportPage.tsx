import React, { Component } from "react";
import {
	Container,
	Col,
	Row,
	Button,
	ButtonGroup,
	Form,
} from "react-bootstrap";
import { API } from "../../API";
import { AppBar } from "../../Components/AppBar";

export class CreateReportPage extends Component {
	sendReport() {

		const report = {
			city: this.getFormElement("nameSpot").value,
			spotName: this.getFormElement("city").value,
			bathersAmount: this.getFormElement("buttonGroupSwimmer").value,
			practicingSportsAmount: this.getFormElement("buttonGroupSurfer").value,
			boatAmount: this.getFormElement("buttonGroupBoat").value,
			solarCream: this.getFormElement("checkboxSunCream").value,
			perfume: this.getFormElement("checkboxPerfume").value,
			hydratingCream: this.getFormElement("checkboxCream").value,
			makeup: this.getFormElement("checkboxMakeup").value,
			gasoline: this.getFormElement("checkboxFuel").value,
			cigarettes: this.getFormElement("checkboxCigarettes").value,
			fertilizer: this.getFormElement("checkboxFertilizer").value,
			paint: this.getFormElement("checkboxPaint").value,
		};
		API.post("/report",report);

		document.getElementById("sentReport").hidden = false;
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
								<ButtonGroup toggle id="buttonGroupWater">
									<Button variant="secondary" value="100">Elevé</Button>
									<Button variant="secondary" value="50">Moyen</Button>
									<Button variant="secondary" value="25">Bas</Button>
									<Button variant="secondary" value="0">Aucun</Button>
								</ButtonGroup>
							</Row>
							<Row>
								Nombre de baigneurs :
								<ButtonGroup toggle id="buttonGroupSwimmer">
									<Button variant="secondary" value="100">Elevé</Button>
									<Button variant="secondary" value="50">Moyen</Button>
									<Button variant="secondary" value="25">Bas</Button>
									<Button variant="secondary" value="0">Aucun</Button>
								</ButtonGroup>
							</Row>
							<Row>
								Nombre de surfeurs :
								<ButtonGroup toggle id="buttonGroupSurfer">
									<Button variant="secondary" value="100">Elevé</Button>
									<Button variant="secondary" value="50">Moyen</Button>
									<Button variant="secondary" value="25">Bas</Button>
									<Button variant="secondary" value="0">Aucun</Button>
								</ButtonGroup>
							</Row>
							<Row>
								Nombre de bateaux :
								<ButtonGroup toggle id="buttonGroupBoat">
									<Button variant="secondary" value="100">Elevé</Button>
									<Button variant="secondary" value="50">Moyen</Button>
									<Button variant="secondary" value="25">Bas</Button>
									<Button variant="secondary" value="0">Aucun</Button>
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
									id="checkboxSunCream"
								/>
							</Row>
							<Row>
								<Form.Check
									type="checkbox"
									label="Parfum / déodorants"
									id="checkboxPerfume"
								/>
							</Row>
							<Row>
								<Form.Check
									type="checkbox"
									label="Crème hydratante"
									id="checkboxCream"
								/>
							</Row>
							<Row>
								<Form.Check
									type="checkbox"
									label="Maquillage"
									id="checkboxMakeup"
								/>
							</Row>
							<Row>
								<Form.Check
									type="checkbox"
									label="Essence"
									id="checkboxFuel"
								/>
							</Row>
							<Row>
								<Form.Check
									type="checkbox"
									label="Cigarettes"
									id="checkboxCigarettes"
								/>
							</Row>
							<Row>
								<Form.Check
									type="checkbox"
									label="Engrais / Fertilisants"
									id="checkboxFertilizer"
								/>
							</Row>
							<Row>
								<Form.Check
									type="checkbox"
									label="Peinture"
									id="checkboxPaint"
								/>
							</Row>
							<Row id="sentReport" hidden>Votre rapport a bien été envoyé !</Row>
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
