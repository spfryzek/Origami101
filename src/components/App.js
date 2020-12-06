import {BrowserRouter as Router, Route} from 'react-router-dom';
import CreateAccount from './CreateAccount';
import ForgotPassword from './ForgotPassword';
import Login from './Login';
import Nav from './Nav';
import React from 'react';

function App() {
	return (
		<Router>
			<div>
				<Route exact path="/">
					<Login></Login>
				</Route>
				<Route exact path="/createAccount">
					<CreateAccount></CreateAccount>
				</Route>
				<Route exact path="/forgotPassword">
					<ForgotPassword></ForgotPassword>
				</Route>
				<Route exact path="/home">
					<Nav page="home"></Nav>
				</Route>
				<Route exact path="/easyOrigami">
					<Nav page="easyOrigami"></Nav>
				</Route>
                <Route exact path="/dogFace">
                    <Nav page="dogFace"></Nav>
                </Route>
                <Route exact path="/heart">
                    <Nav page="heart"></Nav>
                </Route>
				<Route exact path="/mediumOrigami">
					<Nav page="mediumOrigami"></Nav>
				</Route>
                <Route exact path="/dove">
                    <Nav page="dove"></Nav>
                </Route>
                <Route exact path="/butterfly">
                    <Nav page="butterfly"></Nav>
                </Route>
				<Route exact path="/hardOrigami">
					<Nav page="hardOrigami"></Nav>
				</Route>
                <Route exact path="/unicorn">
                    <Nav page="unicorn"></Nav>
                </Route>
                <Route exact path="/iceCreamCone">
                    <Nav page="iceCreamCone"></Nav>
                </Route>
			</div>
		</Router>
	);
}

export default App;
