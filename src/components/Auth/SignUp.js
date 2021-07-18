import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signIn, signUp } from '../../store/actions/authActions'; 

const SignUp = ({ auth, signUp, authError }) => {
    // Defining UseState Hooks for Email and Password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Hooks for First and Last Name
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");

    const emailHandleChange = (e) => {
        setEmail(e.target.value);
    }

    const passwordHandleChange = (e) => {
        setPassword(e.target.value);
    }
    
    const fnameHandleChange = (e) => {
        setfirstName(e.target.value);
    }

    const lnameHandleChange = (e) => {
        setlastName(e.target.value);
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        signUp({email, password, firstName, lastName})        
    }

    if(auth.uid) return <Redirect to='/' />
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
                <div className="error-msg">
                    { authError ? <p>{ authError }</p> : null }
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }       
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser)) 
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);