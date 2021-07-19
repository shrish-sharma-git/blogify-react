import React from 'react';
import { Link } from 'react-router-dom';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import { connect } from 'react-redux';
 

const Navbar = ({ auth, profile }) => {
    const links = auth.uid ? <SignedIn profile={profile}/> : <SignedOut />;
    return ( 
        <div className="navbar">
                <Link to='/' className="logo">Blogify</Link>
                { links }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);