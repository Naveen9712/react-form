import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import config from '../../config';

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${config.apiHost}/profiles`)
      .then(response => {
        setProfiles(response.data);
      })
      .catch(error => {
        console.error("Error fetching profiles:", error);
      });
  }, []);

  const handleEdit = (id) => {
    navigate(`/edit-profile/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this profile?")) {
    axios.delete(`${config.apiHost}/delete-profile/${id}`)
      .then(response => {
        console.log('Profile deleted successfully:', response);
        // Remove the profile from state after successful deletion
        setProfiles(profiles.filter(profile => profile.id !== id));
      })
      .catch(error => {
        console.error('Error deleting profile:', error);
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className='d-flex justify-content-between'>
        <h2>Profiles List</h2>
        <Link to="/add-profile" className="btn btn-outline-dark mb-3">Add Profile</Link>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map(profile => (
            <tr key={profile.id}>
              <td>{profile.id}</td>
              <td>{profile.name}</td>
              <td>{profile.phone}</td>
              <td>{profile.email}</td>
              <td>
                <FaEdit 
                  onClick={() => handleEdit(profile.id)} 
                  style={{ cursor: 'pointer', marginRight: '10px' }} 
                />
                <FaTrash 
                  onClick={() => handleDelete(profile.id)} 
                  style={{ cursor: 'pointer' }} 
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfileList;
