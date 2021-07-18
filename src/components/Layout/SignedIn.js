import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from '../../store/actions/authActions';
import { connect } from 'react-redux';

const SignedIn = ({ signOut, profile }) => {
    return (
        <div className="signedin-links">
            <Link to="/CreateBlog">Create Blog</Link>
            <a onClick={signOut}>Log Out</a>
            <span className="user-logo">
                <Link to="/">
                    {profile.initials}
                </Link>
            </span>
        </div>
    );
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedIn);