import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Landing extends Component {
    render() {
        return (
            <div className="container" style={{ height: "75vh" }}>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="row text-center">
                            <h3>
                                <span style={{ fontFamily: "monospace" }}>Mi <b>Wishlist</b> navideña</span>
                            </h3>
                        </div>
                        <div className="row text-center">
                            <p className="flow-text grey-text text-darken-1">
                                Esta aplicación fue creada para que tú y tus amigos puedan crear y compartir sus listas de regalos navideños deseados. 
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <Link to="/register" style={{ width: "140px", borderRadius: "3px", letterSpacing: "1.5px" }}
                                    className="btn btn-primary"
                                > Register </Link>
                            </div>
                            <div className="col-sm-6">
                                <Link to="/login" style={{ width: "140px", borderRadius: "3px", letterSpacing: "1.5px" }}
                                    className="btn btn-secondary"
                                > Log In </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
