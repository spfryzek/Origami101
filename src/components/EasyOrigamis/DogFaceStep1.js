import {Link} from 'react-router-dom';
import React from 'react';

function DogFaceStep1() {
    return (
        <div>
            <center>
                <h1>Dog Face</h1>
                <h3>Step 1</h3>
            </center>
            <Link
                className="link"
                to="/dogFace">
                Go back
            </Link>
            <button
                type="button">
                Submit Image
            </button>
        </div>
    );
}

export default DogFaceStep1;
