import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "../../validations/loginValidation";
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import config from '../../config';

function Login() {
    const [values, setValues] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    
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

        if (err.email === "" && err.password === "") {
            setLoading(true);
            axios.post(`${config.apiHost}/users`, values)
                .then((res) => {
                    setLoading(false);
                    if (res.data === "Success") {
                        navigate('/home');
                    } else {
                        alert("No record found");
                    }
                })
                .catch((err) =>{
                     setLoading(false);
                     console.log('Error sending data:', err)
                    });
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    
    return (
        <div className="d-flex justify-content-center align-items-center bg-info vh-100">
            <div className='bg-white p-4 rounded-3 shadow-sm' style={{ maxWidth: '500px', width: "90%" }}>
                <h2 className="text-center mb-4">Login</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            <b>Email</b>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            onChange={handleInput}
                            name="email"
                            className="form-control rounded-3"
                            disabled={loading}
                        />
                        {errors.email && (
                            <span className="text-danger">{errors.email}</span>
                        )}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            <b>Password</b>
                        </label>
                        <div className="input-group">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter Password"
                                onChange={handleInput}
                                name="password"
                                className="form-control rounded-3"
                                disabled={loading}
                            />
                            <span className="input-group-text" onClick={toggleShowPassword}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        {errors.password && (
                            <span className="text-danger">{errors.password}</span>
                        )}
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-3 mb-3" disabled={loading}>
                    {loading ? "Please wait..." : "Log in"}
                    </button>
                    <div className="d-flex flex-row justify-content-between">
                        <Link to="/signup" className="text-decoration-none">
                            Create Account
                        </Link>
                        <Link to="/forgot-password" className="text-decoration-none">
                            Forgot Password?
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
