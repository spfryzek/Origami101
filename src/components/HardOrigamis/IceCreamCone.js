import {Link} from 'react-router-dom';
import React from 'react';

function IceCreamCone() {
    return (
        <div>
            <center>
                <h1>Ice Cream Cone</h1>
            </center>
            <Link
                className="link"
                to="/hardOrigami">
                Go back
            </Link>
        </div>
    );
}

export default IceCreamCone;
