import React from 'react';
import { Link } from 'react-router-dom';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import { connect } from 'react-redux';
 

const Navbar = ({ auth }) => {
    const links = auth.uid ? <SignedIn /> : <SignedOut />;
    return ( 
        <div className="navbar">
                <Link to='/' className="logo">Blogify</Link>
                { links }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);