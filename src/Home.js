import React from "react";
import "./css/style.css";
import "./css/Login.css";
import logo from './images/origamiLogo.jpg';

export default function Home() {
  return (
    <div>
      <center>
      	<img
      	class="logo" 
      	src={logo} 
      	title="Origami101 Logo - Credit: Davyn Ben, Pinterest"/>
      	<h1>Origami 101 Home</h1>
      	<form class="login-form">
      		<input 
      		class="form-input"
      		type="text"
      		name="email" 
      		placeholder="Email"/>
      		<input
      		class="form-input"
      		type="text"
      		name="password"
      		placeholder="Password"/>
      	</form>
      	<button 
      	type="button"
      	class="submit-button">
      	Sign in
      	</button>
      	{/* add clickevent */}
      	<div>
        
      	</div>
      </center>
    </div>
  );
}
