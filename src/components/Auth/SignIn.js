import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signIn } from '../../store/actions/authActions';

const SignIn = ({ signIn, authError, auth }) => {
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
        signIn({email, password});
    }   

    if(auth.uid) return <Redirect to='/' />
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
                <div className="error-msg">
                        { authError ? (<p>{ authError }</p>) : (null) }
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
      authError: state.auth.authError,
      auth: state.firebase.auth
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
      signIn: (creds) => dispatch(signIn(creds))
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)