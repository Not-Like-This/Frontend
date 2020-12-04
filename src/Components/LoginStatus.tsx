import React, { Component } from "react";
import { ButtonGroup, Button } from 'react-bootstrap';

export class LoginStatus extends Component {
	render() {
		return <ButtonGroup>
			<Button>Connexion</Button>
			<Button>Inscription</Button>
		</ButtonGroup>;
	}
}
