import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../../config';

const AddChannel = () => {
  const [name, setName] = useState('');
  const [displayName, setDisplayName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${config.apiHost}/channels`, { name, display_name: displayName })
      .then(response => {
        console.log('Channel added successfully:', response);
        navigate('/channels-list');
        alert('channel submitted successfully!');
      })
      .catch(error => {
        console.error('Error adding channel:', error);
      });
  };

  return (
    <div className="container mt-5">
      <h2>Add Channel</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Display Name</label>
          <input
            type="text"
            className="form-control"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    </div>
  );
};

export default AddChannel;
