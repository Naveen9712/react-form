import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/forgot-password', { email })
            .then((response) => {
                setMessage('Password reset link has been sent to your email.');
            })
            .catch((error) => {
                setMessage('An error occurred. Please try again.');
            });
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-info vh-100">
            <div className='bg-white p-4 rounded-3 shadow-sm' style={{ maxWidth: '500px', width: "90%" }}>
                <h2 className="text-center mb-4">Forgot Password</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            <b>Email</b>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleInputChange}
                            className="form-control rounded-3"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-3 mb-3">
                        Send Reset Link
                    </button>
                    {message && <div className="text-center mt-3">{message}</div>}
                    <div>
                        <Link to="/" className='text-decoration-none mt-3 d-block text-center'>login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
