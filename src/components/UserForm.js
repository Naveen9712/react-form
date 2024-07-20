// src/components/UserForm.js
import React, { useState } from "react";
import axios from "axios";
import "./UserForm.css";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Update the URL to your Render.com backend URL
      const response = await axios.post(
        "https://backend-form-nslm.onrender.com/api/users",
        formData
      );
      console.log("User created:", response.data);
      alert("User created successfully!");  // Show success alert

      // Clear input fields after successful submission
      setFormData({
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("There was an error creating the user!", error);
      alert("There was an error creating the user.");  // Show error alert
    }
  };

  return (
    <>
    <div className="container">
        <div>
        <h1 className="form-heading">Create User</h1>
    <form className="user-form" onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Create User</button>
    </form>
        </div>
    </div>
    </>
  );
};

export default UserForm;
