import {Link} from 'react-router-dom';
import React from 'react';
import '../css/style.css';

function EasyOrigami() {
    return (
        <div>
            <center>
                <h1>Easy Origami</h1>
            </center>
            <ul>
                <li>
                    <Link 
                        className="link"
                        to="/dogFace">
                        Dog Face
                    </Link>
                </li>
                <li>
                    <Link 
                        className="link"
                        to="/heart">
                        Heart
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default EasyOrigami;