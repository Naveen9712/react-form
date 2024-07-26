import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import config from '../../config';

const EditChannel = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [displayName, setDisplayName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${config.apiHost}/channels/${id}`)
      .then(response => {
        setName(response.data.name);
        setDisplayName(response.data.display_name);
      })
      .catch(error => {
        console.error('Error fetching channel:', error);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`${config.apiHost}/channels/${id}`, { name, display_name: displayName })
      .then(response => {
        console.log('Channel updated successfully:', response);
        alert('channel updated successfully!');
        navigate('/channels-list');
      })
      .catch(error => {
        console.error('Error updating channel:', error);
      });
  };

  return (
    <div className="container mt-5">
      <h2>Edit Channel</h2>
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
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default EditChannel;
//updated