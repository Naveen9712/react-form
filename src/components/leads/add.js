import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../../config';

const LeadForm = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const navigate = useNavigate();
    const handleInput = (event) => {
        const { name, value } = event.target;
        setValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${config.apiHost}:${config.apiPort}/submit-lead`, values)
            .then((res) => {
                console.log('Lead submitted successfully:', res);
                navigate('/users-list');
                alert('Lead submitted successfully!');
            })
            .catch((err) => {
                console.error('Error submitting lead:', err);
                alert('Failed to submit lead');
            });
    };

    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='bg-light border shadow p-3 rounded w-50'>
                <h2 className='text-center'>Submit Lead</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name'><b>Name</b></label>
                        <input
                            type='text'
                            placeholder='Enter Name'
                            name='name'
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'><b>Email</b></label>
                        <input
                            type='email'
                            placeholder='Enter Email'
                            name="email"
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='phone'><b>Phone</b></label>
                        <input
                            type='text'
                            placeholder='Enter Phone'
                            name='phone'
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='message'><b>Message</b></label>
                        <textarea
                            placeholder='Enter Message'
                            name='message'
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                    </div>
                    <button type="submit" className='btn btn-primary w-100 rounded-0'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default LeadForm;
//updated