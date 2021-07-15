import React, { useState } from 'react';

const SignIn = (e) => {
    // Defining UseState Hooks for Email and Password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailHandleChange = (e) => {
        setEmail(e.target.value);
    }

    const passwordHandleChange = (e) => {
        setPassword(e.target.value);
    }
    
    const HandleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password);
    }
    return (  
        <div className="signin-container">
            <form onSubmit={HandleSubmit} className="sign-in">
                <p className="form-title">Sign In</p>
                <div className="input-field">
                    <label htmlFor="email"></label>
                    <input id="email" type="email" onChange={emailHandleChange} placeholder="Email"/>
                </div>
                <div className="input-field">
                    <label htmlFor="password"></label>
                    <input id="password" type="password" onChange={passwordHandleChange} placeholder="Password"/>
                </div>
                <div className="submit">
                    <button className="submit-btn">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}
 
export default SignIn;