import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import React, { Component } from 'react'

export default class Register extends Component {
    
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            confirmPass: "",
            errors: {}
        };
    };
    
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    }; 
    
    onSubmit = e => {
        e.preventDefault(); const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            confirmPass: this.state.confirmPass
        }; console.log(newUser);
    }; 


    render() {
        const { errors } = this.state; return (
        
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 offset-sm-2">
                        <Link to="/" className="btn btn-secondary">
                            <i className="material-icons left">keyboard_backspace</i> Back to home
                        </Link>
                        <div className="col-sm-12" style={{ paddingLeft: "11.250px" }}>
                            <h4><b>Register</b> below</h4>
                            <p className="btn btn-link">
                                Already have an account? <Link to="/login">Log in</Link>
                            </p>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-group col-sm-12">
                                <input className="form-control" onChange={this.onChange} value={this.state.name} error={errors.name} id="name" type="text" />
                                <label htmlFor="name">Nombre</label>
                            </div>
                            <div className="input-group col-sm-12">
                                <input className="form-control" onChange={this.onChange} value={this.state.email} error={errors.email} id="email" type="email" />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-group col-sm-12">
                                <input className="form-control" onChange={this.onChange} value={this.state.password} error={errors.password} id="password" type="password" />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="input-group col-sm-12">
                                <input className="form-control" onChange={this.onChange} value={this.state.password2} error={errors.password2} id="password2" type="password" />
                                <label htmlFor="password2">Confirmar Password</label>
                            </div>
                            <div className="col-sm-12" style={{ paddingLeft: "11.250px" }}>
                                <button style={{ width: "150px", borderRadius: "3px", letterSpacing: "1.5px", marginTop: "1rem" }}
                                    type="submit" className="btn btn-light"
                                > Sign up </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}