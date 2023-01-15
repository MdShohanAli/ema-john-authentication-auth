import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../Login/Login.css'
import logo from '../../images/google.png'
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);



    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    if (user) {
        navigate(from, { replace: true })
    }

    const handleLoginUser = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)

    }


    return (
        <div className='form-container' >
            <div>
                <h2 className='login-title'>Login</h2>

                <form onSubmit={handleLoginUser} >

                    <div className="input-group" >
                        <label htmlFor="email"> Email </label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group" >
                        <label htmlFor="password"> Password </label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>

                    <p style={{ color: 'red' }}> {error?.message} </p>
                    {
                        loading && <p>Loading</p>
                    }

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