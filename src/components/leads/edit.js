import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../../config';

const EditLead = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    axios.get(`${config.apiHost}:${config.apiPort}/lead/${id}`)
      .then(response => {
        setValues(response.data);
      })
      .catch(error => {
        console.error('Error fetching lead:', error);
      });
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`${config.apiHost}:${config.apiPort}/update-lead/${id}`, values)
      .then(() => {
        alert('Lead updated successfully');
        navigate('/leads-list');
      })
      .catch(error => {
        console.error('Error updating lead:', error);
      });
  };

  return (
    <div className="container mt-5">
      <h2>Edit Lead</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={values.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            value={values.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            value={values.message}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Lead</button>
      </form>
    </div>
  );
};

export default EditLead;
//updated
