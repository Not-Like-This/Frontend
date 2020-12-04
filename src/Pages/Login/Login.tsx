import React, { Component } from "react";
import { API } from "../..//API";
import "./login.css"
import { Form, Button } from 'react-bootstrap';

export class Login extends Component {
    render() {
        return (
            <Form>
                <h3>Connexion</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" id="inputEmail"/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" id="inputPassword"/>
                </div>

                <Button onClick={ (e) => this.sendLogin()}>Se connecter</Button>
                <p className="forgot-password text-right">
                    A pas de compte ? <a href="#">s'inscire?</a>
                </p>
            </Form>
        );
    }

    private async sendLogin(){
        const emailForm = this.getFormElement("inputEmail").value;
        const passwordForm = this.getFormElement("inputPassword").value;

        const loginInfo = {
            email: emailForm,
            password: passwordForm,
		};

		const res = await API.login(loginInfo);
		console.log(res);
    }

    private getFormElement(id: string) {
        return document.getElementById(id) as HTMLInputElement;
    }
}