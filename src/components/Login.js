import {Link} from 'react-router-dom';
import logo from '../images/origamiLogo.jpg';
import React from 'react';
import '../css/Login.css';
import '../css/style.css';

function Login() {
    return (
        <div>
            <center>
                <img
                    className="logo"
                    src={logo}
                    title="Origami101 Logo - Credit: Davyn Ben, Pinterest">
                </img>
                <h1>Origami 101</h1>
                <form 
                    className="login-form">
                    <input
                        className="form-input"
                        type="text"
                        name="email"
                        placeholder="Email">
                    </input>
                    <input
                        className="form-input"
                        type="text"
                        name="password"
                        placeholder="Password">
                    </input>
                </form>
                <Link
                    to="/home">
                    <button
                        type="button"
                        className="submit-button">
                        Sign in
                    </button>
                </Link>
                <div>
                    <Link
                        className="link"
                        to="/createAccount">
                        Create new account
                    </Link>
                    <Link
                        className="link"
                        to="/forgotPassword">
                        Forgot password?
                    </Link>
                </div>
            </center>
        </div>
    );
}

export default Login;