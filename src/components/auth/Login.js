import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    };

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault(); const userData = {
            email: this.state.email,
            password: this.state.password
        }; console.log(userData);
    };



    render() {
        const { errors } = this.state;

        return (
            <div className="container">
                <div className="row" style={{ marginTop: "4rem" }}>
                    <div className="col-sm-8 offset-sm-2">
                        <Link to="/" className="btn btn-secondary">
                            Back to home
                        </Link>
                        <div className="col-sm-12 mt-3" style={{ paddingLeft: "11.250px" }}>
                            <h4><b>Login</b></h4>
                            <p className="btn btn-link">
                                Don't have an account? <Link to="/register">Register</Link>
                            </p>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="form-group col-sm-12">
                                <label htmlFor="email">Email</label>
                                <input className="form-control" onChange={this.onChange} value={this.state.email} error={errors.email} id="email" type="email" />
                            </div>
                            <div className="form-group col-sm-12">
                                <label htmlFor="password">Password</label>
                                <input className="form-control" onChange={this.onChange} value={this.state.password} error={errors.password} id="password" type="password" />
                            </div>
                            <div className="col-sm-12" style={{ paddingLeft: "11.250px" }}>
                                <button style={{ width: "150px", borderRadius: "3px", letterSpacing: "1.5px", marginTop: "1rem" }}
                                    type="submit" className="btn btn-primary"
                                > Login </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
