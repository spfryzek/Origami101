import {Link} from 'react-router-dom';
import React from 'react';

function DogFace() {
    return (
        <div>
            <center>
                <h1>Dog Face</h1>
            </center>
            <Link
                className="link"
                to="/easyOrigami">
                Go back
            </Link>
        </div>
    );
}

export default DogFace;