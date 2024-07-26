// src/components/ChangePassword.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const [values, setValues] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    let err = {};
    if (!values.currentPassword) {
      err.currentPassword = 'Current password is required';
    }
    if (!values.newPassword) {
      err.newPassword = 'New password is required';
    }
    if (values.newPassword !== values.confirmNewPassword) {
      err.confirmNewPassword = 'Passwords do not match';
    }
    return err;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const err = validate(values);
    setErrors(err);
    if (Object.keys(err).length === 0) {
      axios.put('/change-password', values)
        .then((res) => {
          console.log('Password changed successfully');
          navigate('/home');
        })
        .catch((err) => console.log('Error changing password:', err));
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className='bg-light p-4 rounded-3 shadow-sm border' style={{ maxWidth: '500px', width: "90%" }}>
        <h2 className="text-center mb-4">Change Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="currentPassword" className="form-label"><b>Current Password</b></label>
            <input
              type="password"
              name="currentPassword"
              placeholder="Enter Current Password"
              className="form-control rounded-3"
              onChange={handleInput}
            />
            {errors.currentPassword && (<span className="text-danger">{errors.currentPassword}</span>)}
          </div>
          <div className="mb-3">
            <label htmlFor="newPassword" className="form-label"><b>New Password</b></label>
            <input
              type="password"
              name="newPassword"
              placeholder="Enter New Password"
              className="form-control rounded-3"
              onChange={handleInput}
            />
            {errors.newPassword && (<span className="text-danger">{errors.newPassword}</span>)}
          </div>
          <div className="mb-3">
            <label htmlFor="confirmNewPassword" className="form-label"><b>Confirm New Password</b></label>
            <input
              type="password"
              name="confirmNewPassword"
              placeholder="Confirm New Password"
              className="form-control rounded-3"
              onChange={handleInput}
            />
            {errors.confirmNewPassword && (<span className="text-danger">{errors.confirmNewPassword}</span>)}
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-3">Change Password</button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
