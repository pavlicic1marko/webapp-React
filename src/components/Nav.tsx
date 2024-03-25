import React from 'react';
import {Link} from 'react-router-dom';

    const Nav = () => {
        return(
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand">Home</Link>
                </div>

            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                    <Link to='/Login' className="nav-link active" aria-current="page" >Login</Link>
                </li>
                <li className="nav-item">
                    <Link to='/Register' className="nav-link" >Register</Link>
                </li>
            </ul>
            </nav>
        );
    };

    export default Nav