import {Link} from 'react-router-dom';
import React from 'react';

function Butterfly() {
    return (
        <div>
            <center>
                <h1>Butterfly</h1>
            </center>
            <Link
                className="link"
                to="/mediumOrigami">
                Go back
            </Link>
        </div>
    );
}

export default Butterfly;
