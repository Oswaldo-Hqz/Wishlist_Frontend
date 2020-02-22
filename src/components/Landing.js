import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Landing extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h3 className="display-4">Hay beyaaaaa!</h3>
                <p className="lead"><b>Wishlist</b> navideña de Sistemas Informaticos</p>
                <hr className="my-4" />
                <p>Esta aplicación fue desarrollada para que tú y tus amigos puedan crear y compartir sus listas de regalos navideños.</p>
                <div className="row">
                    <div className="col-sm-2">
                        <Link to="/register" style={{ width: "140px", borderRadius: "3px", letterSpacing: "1.5px" }}
                            className="btn btn-primary"
                        > Registrarme </Link>
                    </div>
                    <div className="col-sm-2">
                        <Link to="/login" style={{ width: "140px", borderRadius: "3px", letterSpacing: "1.5px" }}
                            className="btn btn-secondary"
                        > Iniciar sesión </Link>
                    </div>
                </div>
            </div>
        )
    }
}
