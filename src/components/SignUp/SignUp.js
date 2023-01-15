import React, { useState } from 'react';
import '../Login/Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import logo from '../../images/google.png'
import auth from '../../Firebase/Firebase.init'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,


    ] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConformPassword = event => {
        setConfirmPassword(event.target.value)
    }
    if (user) {
        navigate('/shop')
    }

    const handleCreateUser = event => {
        event.preventDefault()
        if (password !== confirmPassword) {
            setError("your two Password can't be  match")
            return
        }
        if (password.length < 6) {
            setError('password must be 6 characters or longer');
            return
        }

        createUserWithEmailAndPassword(email, password)

    }

    return (
        <div className='form-container' >
            <div>
                <h2 className='login-title' >Sign Up</h2>

                <form onSubmit={handleCreateUser}>

                    <div className="input-group" >
                        <label htmlFor="email"> Email </label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group" >
                        <label htmlFor="password"> Password </label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group" >
                        <label htmlFor="conform-password"> Conform Password </label>
                        <input onBlur={handleConformPassword} type="password" name="password" id="" required />
                        <p style={{ color: 'red' }} >{error}</p>
                    </div>

                    <input className='form-submit' type="submit" value="Sign Up" />


                </form>
                <p> Already have an account? <Link className='form-link' to='/login'>login </Link></p>
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

export default SignUp;