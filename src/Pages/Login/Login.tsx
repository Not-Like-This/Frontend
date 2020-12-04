import React, { Component } from "react";
import { API } from "src/API";
import "./login.css"

export class Login extends Component {
    render() {
        return (
            <form>
                <h3>Connexion</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" id="inputEmail"/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" id="inputPassword"/>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={ (e) => this.sendLogin()}>Se connecter</button>
                <p className="forgot-password text-right">
                    A pas de compte ? <a href="#">s'inscire?</a>
                </p>
            </form>
        );
    }

    private sendLogin(){
        const emailForm = this.getFormElement("inputEmail").value;
        const passwordForm = this.getFormElement("inputPassword").value;

        const loginInfo = {
            email: emailForm,
            password: passwordForm,
        };

        API.login(loginInfo)
    }

    private getFormElement(id: string) {
        return document.getElementById(id) as HTMLInputElement;
    }
}