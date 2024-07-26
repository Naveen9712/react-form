import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from '../../validations/signupValidation';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import config from '../../config';

const Signup = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [agreeToTerms, setAgreeToTerms] = useState(false);
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        const { name, value } = event.target;
        setValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const err = Validation(values);
        setErrors(err);

        if (err.name === "" && err.email === "" && err.password === "" && err.confirmPassword === "") {
            axios.post(`${config.apiHost}/signup`, values)
                .then((res) => {
                    console.log('Response from server:', res);
                    navigate('/');
                })
                .catch((err) => console.log('Error sending data:', err));
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-info vh-100'>
            <div className='bg-white p-4 rounded-3 shadow-sm' style={{ maxWidth: '500px', width: "90%" }}>
                <h2 className='text-center mb-4'>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name' className='form-label'><b>Name</b></label>
                        <input
                            type='text'
                            placeholder='Enter Name'
                            name='name'
                            onChange={handleInput}
                            className='form-control rounded-3'
                        />
                        {errors.name && (<span className="text-danger">{errors.name}</span>)}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'><b>Email</b></label>
                        <input
                            type='email'
                            placeholder='Enter Email'
                            name="email"
                            onChange={handleInput}
                            className='form-control rounded-3'
                        />
                        {errors.email && (<span className="text-danger">{errors.email}</span>)}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password' className='form-label'><b>Password</b></label>
                        <div className="input-group">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Enter Password'
                                name='password'
                                onChange={handleInput}
                                className='form-control rounded-3'
                            />
                            <span className="input-group-text" onClick={toggleShowPassword}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        {errors.password && (<span className="text-danger">{errors.password}</span>)}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='confirmPassword' className='form-label'><b>Confirm Password</b></label>
                        <div className="input-group">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                placeholder='Enter Confirm Password'
                                name='confirmPassword'
                                onChange={handleInput}
                                className='form-control rounded-3'
                            />
                            <span className="input-group-text" onClick={toggleShowConfirmPassword}>
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        {errors.confirmPassword && (<span className="text-danger">{errors.confirmPassword}</span>)}
                    </div>
                    <div className='mb-3 form-check'>
                        <input
                            type='checkbox'
                            className='form-check-input'
                            id='agreeToTerms'
                            checked={agreeToTerms}
                            onChange={() => setAgreeToTerms(!agreeToTerms)}
                        />
                        <label className='form-check-label' htmlFor='agreeToTerms'>
                            I agree to the terms and policies
                        </label>
                    </div>
                    <button type="submit" className='btn btn-success w-100 rounded-3' disabled={!agreeToTerms}>
                        Sign Up
                    </button>
                    <Link to="/" className='text-decoration-none mt-3 d-block text-center'>I have already an account</Link>
                </form>
            </div>
        </div>
    );
};

export default Signup;
