import React from 'react';
import { Link } from 'react-router-dom';
import '../Login/Login.css'
import logo from '../../images/google.png'
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleLoginUser = event => {
        event.preventDefault()

    }

    return (
        <div className='form-container' >
            <div>
                <h2 className='login-title' >Login</h2>

                <form onSubmit={handleLoginUser} >

                    <div className="input-group" >
                        <label htmlFor="email"> Email </label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group" >
                        <label htmlFor="password"> Password </label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>

                    <input className='form-submit' type="submit" value="Login" required />


                </form>
                <p> New To Ema-John ?  <Link className='form-link' to='/signup'> create a new account </Link></p>
                <div className='form-divide'>
                    <div className='divider-1' >

                    </div>
                    <div className='or' >
                        <p>or</p>
                    </div>
                    <div className='divider-2'  >

                    </div>

                </div>
                <button className='google-btn'> <img className='google-btn-logo' src={logo} alt="" /> Continue With Google </button>

            </div>

        </div>
    );
};

export default Login;