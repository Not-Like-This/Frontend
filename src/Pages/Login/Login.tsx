import React, { Component } from "react";
import "./login.css"

export class Login extends Component {
    render() {
        return (
            <form>
                <h3>Connexion</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Se connecter</button>
                <p className="forgot-password text-right">
                    A pas de compte ? <a href="#">s'inscire?</a>
                </p>
            </form>
        );
    }
}