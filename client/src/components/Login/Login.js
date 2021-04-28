import React from 'react';
import './Login.css';

const Login = (props) => {

    const {
        userName, 
        setUserName,
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError 
    } = props;

    return (
        <section className='login'>
            <div className="loginContainer">
                <label>Username</label>
                <input 
                    type="text"
                    autoFocus
                    required
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                />
                <label>Email</label>
                <input 
                    type='text'  
                    required 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input 
                    type='password' 
                    required 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {
                        hasAccount ? (
                            <>
                                <button onClick={handleLogin} className="w-full bg-purple-800 text-white min-h-full p-4" >Sign In</button>
                                <p>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)} >Sign up</span></p>
                            </>
                        ) : (
                            <>
                                <button onClick={handleSignup} className="w-full bg-purple-800 text-white min-h-full p-4" >Sign Up</button>
                                <p>Have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                            </>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Login;
