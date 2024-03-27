import React from 'react';
import {Link} from 'react-router-dom';


    const Nav = (props:{name: string, setName:(name: string) => void}) => { /* name and setName */
        let menu; // create a varible with block scope

        const logout = async () => {
             await fetch('http://localhost:8000/api/logout',{
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                credentials:'include'
            });
            props.setName(''); // set props.name to '' after logout
        }


        if (props.name === '') {
            menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                    <Link to='/Login' className="nav-link active" aria-current="page" >Login</Link>
                </li>
                <li className="nav-item">
                    <Link to='/Register' className="nav-link" >Register</Link>
                </li>
            </ul>
           )
        }else{
            menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item active">
                        /* on click call logout function */
                    <Link to='/Login' className="nav-link " aria-current="page" onClick = {logout}>Logout</Link>
                </li>
            </ul>
            )
        }

        return(
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand">Home</Link>
                </div>

            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                {menu} {/* show login or logout button */}
            </ul>
            </nav>
        );
    };

    export default Nav