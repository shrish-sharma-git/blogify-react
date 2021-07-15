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
                <p>Sign In</p>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" onChange={HandleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" onChange={HandleChange}/>
                </div>
                <button className="submit-btn">
                    Login
                </button>
            </form>
        </div>
    );
}
 
export default SignIn;