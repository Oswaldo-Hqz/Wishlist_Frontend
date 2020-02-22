import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class Register extends Component {
    
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

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    };
    
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    }; 
    
    onSubmit = e => {
        e.preventDefault(); 
        
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            confirmPass: this.state.confirmPass
        }; 
        
        this.props.registerUser(newUser, this.props.history); 
    }; 


    render() {
        const { errors } = this.state; 
        
        return (
        
            <div className="container h-100 ">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-md-6">
                        <Link to="/" className="btn btn-light">
                            <i className="fas fa-arrow-left"></i> Inicio
                        </Link>
                    </div>
                </div>
                <div className="row mt-2 h-100 justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="card shadow p-3 mb-5 bg-white rounded">
                            <div className="card-header">
                                <h5 className="card-title d-inline">Registro</h5>
                                <small className="btn btn-link d-inline text-muted">
                                    ¿Ya tenes una cuenta? <Link to="/login">Entonces logueate papa!</Link>
                                </small>
                            </div>
                            <div className="card-body">
                                <form noValidate onSubmit={this.onSubmit}>
                                    <div className="form-group col-sm-12">
                                        <label htmlFor="name">Nombre</label>
                                        <input className={classnames("form-control", { "is-invalid": errors.name })}
                                        onChange={this.onChange} value={this.state.name} error={errors.name} id="name" type="text" />
                                        <span className="invalid-feedback">{errors.name}</span>
                                    </div>
                                    <div className="form-group col-sm-12">
                                        <label htmlFor="email">Email</label>
                                        <input className={classnames("form-control", { "is-invalid": errors.email })}
                                        onChange={this.onChange} value={this.state.email} error={errors.email} id="email" type="email" />
                                        <span className="invalid-feedback">{errors.email}</span>
                                    </div>
                                    <div className="form-group col-sm-12">
                                        <label htmlFor="password">Password</label>
                                        <input className={classnames("form-control", { "is-invalid": errors.password })}
                                        onChange={this.onChange} value={this.state.password} error={errors.password} id="password" type="password" />
                                        <span className="invalid-feedback">{errors.password}</span>
                                    </div>
                                    <div className="form-group col-sm-12">
                                        <label htmlFor="password2">Confirmar Password</label>
                                        <input className={classnames("form-control", { "is-invalid": errors.confirmPass })}
                                        onChange={this.onChange} value={this.state.password2} error={errors.password2} id="password2" type="password" />
                                        <span className="invalid-feedback">{errors.confirmPass}</span>
                                    </div>
                                    <div className="col-sm-12" style={{ paddingLeft: "11.250px" }}>
                                        <button style={{ width: "150px", borderRadius: "3px", letterSpacing: "1.5px", marginTop: "1rem" }}
                                            type="submit" className="btn btn-primary"
                                        > Registrar </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));
