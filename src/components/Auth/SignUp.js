import React, { useState } from 'react';

const SignUp = () => {
    // Defining UseState Hooks for Email and Password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Hooks for First and Last Name
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");

    const emailHandleChange = (e) => {
        setEmail(e.target.value);
    }

    const passwordHandleChange = (e) => {
        setPassword(e.target.value);
    }
    
    const fnameHandleChange = (e) => {
        setFname(e.target.value);
    }

    const lnameHandleChange = (e) => {
        setLname(e.target.value);
    }

    const HandleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password, fname, lname);
    }

    return (
        <div className="signin-container">
            <form onSubmit={HandleSubmit} className="sign-in">
                <p className="form-title">Sign Up</p>
                <div className="input-field">
                    <label htmlFor="email"></label>
                    <input id="email" type="email" onChange={emailHandleChange} placeholder="Email"/>
                </div>
                <div className="input-field">
                    <label htmlFor="password"></label>
                    <input id="password" type="password" onChange={passwordHandleChange} placeholder="Password"/>
                </div>
                <div className="input-field">
                    <label htmlFor="firstName"></label>
                    <input id="firstName" type="text" onChange={fnameHandleChange} placeholder="First Name"/>
                </div>
                <div className="input-field">
                    <label htmlFor="lastName"></label>
                    <input id="lastName" type="text" onChange={lnameHandleChange} placeholder="Last Name"/>
                </div>
                <div className="submit">
                    <button className="submit-btn">
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
}
 
export default SignUp;