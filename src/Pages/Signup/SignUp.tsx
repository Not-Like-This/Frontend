import React, { Component } from "react";
import { API } from "../../API";
import "./signup.css"
import { Form, Button } from 'react-bootstrap';

export class SignUp extends Component {
    render() {
        return (
            <Form>
                <h3>Inscription</h3>

                <div className="form-group">
                    <label>Prénom</label>
                    <input type="text" className="form-control" placeholder="Prénom" id="inputPrenom"/>
                </div>

                <div className="form-group">
                    <label>Nom</label>
                    <input type="text" className="form-control" placeholder="Nom" id="inputNom"/>
                </div>

                <div className="form-group">
                    <label>Addresse email</label>
                    <input type="email" className="form-control" placeholder="Addresse email" id="inputEmail"/>
                </div>

                <div className="form-group">
                    <label>Mot de passe</label>
                    <input type="password" className="form-control" placeholder="Mot de passe" id="inputPassword"/>
                </div>

                <Button onClick={(e) => this.sendRegistration()}>S'inscrire</Button>
                <p className="forgot-password text-right">
                    Déjà inscrit ? <a href="#">se connecter?</a>
                </p>
            </Form>
        );
    }

    private getFormElement(id: string) {
        return document.getElementById(id) as HTMLInputElement;
    }

    private async sendRegistration(){
        const prenomForm = this.getFormElement("inputPrenom").value;
        const nomForm = this.getFormElement("inputNom").value;
        const emailForm = this.getFormElement("inputEmail").value;
        const passwordForm = this.getFormElement("inputPassword").value;

        const registrationInfo = {
            firstName: prenomForm,
            lastName: nomForm,
            email: emailForm,
            password: passwordForm,
        };
		console.log(registrationInfo);
		const res = await API.register(registrationInfo);
		console.log(res);
    }
}