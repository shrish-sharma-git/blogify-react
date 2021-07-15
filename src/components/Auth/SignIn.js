import React from 'react';

const SignIn = (e) => {
    const HandleChange = () => {
        console.log(e);
    }
    
    const HandleSubmit = (e) => {
        console.log(e);
    }
    return (  
        <div className="signin-container">
            <form onSubmit={HandleSubmit} className="sign-in">
                <p className="form-title">Sign In</p>
                <div className="input-field">
                    <label htmlFor="email"></label>
                    <input id="email" type="email" onChange={HandleChange} placeholder="Email"/>
                </div>
                <div className="input-field">
                    <label htmlFor="password"></label>
                    <input id="password" type="password" onChange={HandleChange} placeholder="Password"/>
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