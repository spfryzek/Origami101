import {Link} from 'react-router-dom';
import React from 'react';
import '../css/style.css';

function MediumOrigami() {
    return (
        <div>
            <center>
                <h1>Medium Origami </h1>
            </center>
            <ul>
                <li>
                    <Link 
                        className="link"
                        to="/dove">
                        Dove
                    </Link>
                </li>
                <li>
                    <Link 
                        className="link"
                        to="/butterfly">
                        Butterfly
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default MediumOrigami;
