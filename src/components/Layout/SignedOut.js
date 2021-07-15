import React from 'react';
import { Link } from 'react-router-dom';

const SignedOut = () => {
    return (  
        <div className="signedout-links">
            <Link to="/">Sign Up</Link>
            <Link to="/">Log In</Link>
        </div>
    );
}
 
export default SignedOut;