import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    };

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard"); // push user to dashboard when they login
        }

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
        
        const userData = {
            email: this.state.email,
            password: this.state.password
        }; 
        
        this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
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
                                <input className={classnames("form-control", { "is-invalid": errors.email || errors.emailnotfound })}
                                onChange={this.onChange} value={this.state.email} error={errors.email} id="email" type="email" />
                                <span className="invalid-feedback">{errors.email}{errors.emailnotfound}</span>
                            </div>
                            <div className="form-group col-sm-12">
                                <label htmlFor="password">Password</label>
                                <input className={classnames("form-control", { "is-invalid": errors.password || errors.passwordincorrect })}
                                onChange={this.onChange} value={this.state.password} error={errors.password} id="password" type="password" />
                                <div className="invalid-feedback"> {errors.password} {errors.passwordincorrect} </div>
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

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { loginUser }
)(Login);