import {Link} from 'react-router-dom';
import logo from '../images/origamiLogo.jpg';
import React from 'react';
import '../css/Login.css';
import '../css/style.css';

function ForgotPassword() {
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
          		        placeholder="Enter your email">
                    </input>
        		</form>
        		<button
                    type="button"
                    className="submit-button">
                    Reset password
        		</button>
        		<div>
                    <Link
                    className="link"
                    to="/">
                    Back to sign in
                    </Link>
                </div>
			</center>
		</div>
	);
}

export default ForgotPassword;