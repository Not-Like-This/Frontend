import React, { Component } from "react";
import { Navbar, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoginStatus } from "./LoginStatus";
import {
	faFacebook,
	faTwitter,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export class AppBar extends Component {
	render() {
		return (
			<Navbar
				className="bg-info justify-content-between nav-fill"
				fixed="top"
			>
				<Row>
					<FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
					<FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
					<FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
				</Row>
				<Navbar.Brand href="#home" className="justify-content-right">
					<img
						alt=""
						src="/logo-64.png"
						width="30"
						height="30"
						className="d-inline-block align-top"
					/>
					Clean Waves
				</Navbar.Brand>

				<LoginStatus />
			</Navbar>
		);
	}
}
