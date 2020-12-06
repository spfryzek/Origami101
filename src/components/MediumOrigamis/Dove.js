import {Link} from 'react-router-dom';
import React from 'react';

function Dove() {
    return (
        <div>
            <center>
                <h1>Dove</h1>
            </center>
            <Link
                className="link"
                to="/mediumOrigami">
                Go back
            </Link>
        </div>
    );
}

export default Dove;
