import {Link} from 'react-router-dom';
import React from 'react';
import '../css/style.css';

function HardOrigami() {
    return (
        <div>
            <center>
                <h1>Hard Origami </h1>
            </center>
            <ul>
                <li>
                    <Link 
                        className="link"
                        to="/unicorn">
                        Unicorn
                    </Link>
                </li>
                <li>
                    <Link 
                        className="link"
                        to="/iceCreamCone">
                        Ice Cream Cone
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default HardOrigami;
