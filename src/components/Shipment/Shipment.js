import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';



const Shipment = () => {
    const [user] = useAuthState(auth)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('')





    const handleNameBlur = event => {
        setName(event.target.value)
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handleAddressBlur = event => {
        setAddress(event.target.value)
    }
    const handleConformPassword = event => {
        setPhone(event.target.value)
    }


    const handleCreateUser = event => {
        event.preventDefault()
        const shipping = (name, email, address, phone)
        console.log(shipping);

    }

    return (
        <div className='form-container' >
            <div>
                <h2 className='login-title' >Shipping Information</h2>

                <form onSubmit={handleCreateUser}>

                    <div className="input-group" >
                        <label htmlFor="name"> Your Name </label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                    </div>
                    <div className="input-group" >
                        <label htmlFor="email"> Your Email </label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required />
                    </div>
                    <div className="input-group" >
                        <label htmlFor="address"> Address </label>
                        <input onBlur={handleAddressBlur} type="address" name="" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone"> Phone Number </label>
                        <input onBlur={handleConformPassword} type="number" name="phone" id="" required />
                        <p style={{ color: 'red' }} >{error}</p>
                    </div>

                    <input className='shipment-submit' type="submit" value="Add shipping" />


                </form>




            </div>

        </div>
    );
};

export default Shipment;