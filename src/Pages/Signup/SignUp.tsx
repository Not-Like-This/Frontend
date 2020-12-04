import React, { Component } from "react";
import "./signup.css"

export class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Inscription</h3>

                <div className="form-group">
                    <label>Prénom</label>
                    <input type="text" className="form-control" placeholder="Prénom" />
                </div>

                <div className="form-group">
                    <label>Nom</label>
                    <input type="text" className="form-control" placeholder="Nom" />
                </div>

                <div className="form-group">
                    <label>Addresse email</label>
                    <input type="email" className="form-control" placeholder="Addresse email" />
                </div>

                <div className="form-group">
                    <label>Mot de passe</label>
                    <input type="password" className="form-control" placeholder="Mot de passe" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">S'inscrire</button>
                <p className="forgot-password text-right">
                    Déjà inscrit ? <a href="#">se connecter?</a>
                </p>
            </form>
        );
    }
}