import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { AppBar } from "../../Components/AppBar";

export class CreateReportPage extends Component {
	render() {
		return (
			<Container fluid className="min-100">
				<AppBar />
				<form>
					<Col sm={9} className="mt-5">
						<Row>Signalement :</Row>
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
							Lieu :
							<input type="text" id="nameSpot" required></input>
						</Row>
						<Row>
							<div
								className="btn-group btn-group-toggle"
								data-toggle="buttons"
							>
								<label className="btn btn-secondary active">
									<input
										type="radio"
										name="options"
										id="optionHigh"
										value="Elevé"
										checked
									></input>
								</label>
								<label className="btn btn-secondary">
									<input
										type="radio"
										name="options"
										id="optionAverage"
										value="Moyen"
									></input>
								</label>
								<label className="btn btn-secondary">
									<input
										type="radio"
										name="options"
										id="optionLow"
										value="Bas"
									></input>
								</label>
								<label className="btn btn-secondary">
									<input
										type="radio"
										name="options"
										id="optionNone"
										value="Aucun"
									></input>
								</label>
							</div>
						</Row>
						<Row>
							Note :{" "}
							<select name="comboboxRating" id="comboboxRating">
								<option value="0">0</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
							</select>
						</Row>
						<input type="submit" />
					</Col>
				</form>
			</Container>
		);
	}
}
