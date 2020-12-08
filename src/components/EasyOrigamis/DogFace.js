import {Link} from 'react-router-dom';
import React from 'react';

function DogFace() {
    return (
        <div>
            <center>
                <h1>Dog Face</h1>
            </center>
            <div 
                className="link-spacing">
                <Link
                    to="/easyOrigami">
                    Go back
                </Link>
                <Link
                    to="/dogFaceStep1">
                    Start Lesson
                </Link>
            </div>
        </div>
    );
}

export default DogFace;