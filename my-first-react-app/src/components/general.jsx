import App from './app.jsx'
import '../styles/general.css';
import React, { useState } from 'react'

export default function general({ onDataSave }) {
    const [NameData, SetNameData] = useState('');
    const [EmailData, SetEmailData] = useState('');
    const [PhoneData, SetPhoneData] = useState('');
    const [AddressData, SetAddressData] = useState('');

    const handleSave = (e) => {
        e.preventDefault();
        onDataSave((prevData) => ({
            ...prevData,
            name: NameData,
            email: EmailData,
            phone: PhoneData,
            address: AddressData,
        }));
    }
    return (
        <div className='container'>
            <form onSubmit={handleSave}>
                <div id='name'>
                    <h1>Full Name</h1>
                    <input type="text" name='name' value={NameData} onChange={(e) => SetNameData(e.target.value)} />
                </div>
                <div id='email'>
                    <h1>Email</h1>
                    <input type="text" name='email' value={EmailData} onChange={(e) => SetEmailData(e.target.value)} />
                </div>
                <div id='phone'>
                    <h1>Phone Number</h1>
                    <input type="text" name='phone' value={PhoneData} onChange={(e) => SetPhoneData(e.target.value)} />
                </div>
                <div id='address'>
                    <h1>Address</h1>
                    <input type="text" name='address' value={AddressData} onChange={(e) => SetAddressData(e.target.value)} />
                </div>
                <div className='save'>
                    <button id="save-btn" type='submit'>Save</button>
                </div>
            </form>
        </div>
    );
}