import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import config from '../../config';

const AddProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${config.apiHost}:${config.apiPort}/profiles`, profile);
      alert("Profile added successfully!");
      navigate('/profile');
    } catch (error) {
      console.error("Error adding profile:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-outline-dark">Add Profile</button>
      </form>
    </div>
  );
};

export default AddProfile;
