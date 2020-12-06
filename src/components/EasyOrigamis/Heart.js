import {Link} from 'react-router-dom';
import React from 'react';

function Heart() {
    return (
        <div>
            <center>
                <h1>Heart</h1>
            </center>
            <Link
                className="link"
                to="/easyOrigami">
                Go back
            </Link>
        </div>
    );
}

export default Heart;