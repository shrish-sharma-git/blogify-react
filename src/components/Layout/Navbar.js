import React from 'react';
import { Link } from 'react-router-dom';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
 
const Navbar = () => {
    return ( 
        <div className="navbar">
                <Link to='/' className="logo">Blogify</Link>
                <SignedIn />
                <SignedOut />
        </div>
    );
}
 
export default Navbar;