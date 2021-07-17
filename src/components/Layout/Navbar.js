import React from 'react';
import { Link } from 'react-router-dom';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import { connect } from 'react-redux';
 

const Navbar = () => {
    return ( 
        <div className="navbar">
                <Link to='/' className="logo">Blogify</Link>
                <SignedIn />
                <SignedOut />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps)(Navbar);