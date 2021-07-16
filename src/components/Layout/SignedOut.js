import React from 'react';
import { Link } from 'react-router-dom';

const SignedOut = () => {
    return (  
        <div className="signedout-links">
            <Link to="/SignUp">Sign Up</Link>
            <Link to="/SignIn">Log In</Link>
        </div>
    );
}
 
export default SignedOut;