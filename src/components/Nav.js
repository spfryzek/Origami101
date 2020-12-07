import Butterfly from './MediumOrigamis/Butterfly';
import DogFace from './EasyOrigamis/DogFace';
import Dove from './MediumOrigamis/Dove';
import EasyOrigami from './EasyOrigami';
import HardOrigami from './HardOrigami';
import Heart from './EasyOrigamis/Heart';
import Home from './Home';
import Grades from './Grades';
import IceCreamCone from './HardOrigamis/IceCreamCone';
import {Link} from 'react-router-dom';
import logo from '../images/origamiLogo.jpg';
import MediumOrigami from './MediumOrigami';
import React from 'react';
import Unicorn from './HardOrigamis/Unicorn';
import '../css/Nav.css';
import '../css/style.css';

function Nav(props) {
    return (
        <div>
    		<nav>
    			<ul
                    className="nav-links">
                    <li>
                        <Link 
                            to="/home">
                            <img
                                className="logo-nav"
                                src={logo} 
                                title="Origami101 Logo - Credit: Davyn Ben, Pinterest">
                            </img>
          		        </Link>
          		    </li>
          		    <li>
          		        <Link 
          		            className="link"
          		            to="/">
                            Log out
          		        </Link>
          		    </li>
          		</ul>
          	</nav>
            {props.page === 'home' && <Home></Home>}
            {props.page === 'easyOrigami' && <EasyOrigami></EasyOrigami>}
            {props.page === 'dogFace' && <DogFace></DogFace>}
            {props.page === 'heart' && <Heart></Heart>}
            {props.page === 'mediumOrigami' && <MediumOrigami></MediumOrigami>}
            {props.page === 'dove' && <Dove></Dove>}
            {props.page === 'butterfly' && <Butterfly></Butterfly>}
            {props.page === 'hardOrigami' && <HardOrigami></HardOrigami>}
	    {props.page === 'grades' && <Grades></Grades>}
            {props.page === 'unicorn' && <Unicorn></Unicorn>}
            {props.page === 'iceCreamCone' && <IceCreamCone></IceCreamCone>}
        </div>
	);
}

export default Nav;
