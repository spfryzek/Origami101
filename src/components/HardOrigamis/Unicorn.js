import {Link} from 'react-router-dom';
import React from 'react';

function Unicorn() {
    return (
        <div>
            <center>
                <h1>Unicorn</h1>
            </center>
            <Link
                className="link"
                to="/hardOrigami">
                Go back
            </Link>
        </div>
    );
}

export default Unicorn;
