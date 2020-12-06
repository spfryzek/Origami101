import {Link} from 'react-router-dom';
import React from 'react';
import '../css/style.css';

function Home() {
    return (
        <div>
            <center>
                <h1>Welcome</h1>
            </center>
            <ul>
                <li>
                    <Link 
                        className="link"
                        to="/easyOrigami">
                        Easy Origami
                    </Link>
                </li>
                <li>
                    <Link 
                        className="link"
                        to="/mediumOrigami">
                        Medium Origami
                    </Link>
                </li>
                <li>
      		        <Link 
      		            className="link"
      		            to="/hardOrigami">
                        Hard Origami
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Home;