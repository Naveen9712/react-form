import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import config from '../../config';

const EditProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get(`${config.apiHost}:${config.apiPort}/profiles/${id}`);
        setProfile(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [id]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${config.apiHost}:${config.apiPort}/profiles/${id}`, profile);
      alert("Profile updated successfully!");
      navigate('/profile'); // Redirect to the profiles list after updating
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Edit Profile</h2>
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
        <button type="submit" className="btn btn-outline-dark">Update Profile</button>
      </form>
    </div>
  );
};

export default EditProfile;
