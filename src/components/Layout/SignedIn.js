import React from 'react';
import { Link } from 'react-router-dom';

const SignedIn = () => {
    return (
        <div className="signedin-links">
            <Link to="/">Create Blog</Link>
            <Link to="/">Log Out</Link>
            <span className="user-logo"><Link to="/">SS</Link></span>
        </div>
    );
}
 
export default SignedIn;