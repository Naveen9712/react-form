import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import config from '../../config';

const LeadList = () => {
  const [leads, setLeads] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${config.apiHost}/leads`)
      .then(response => {
        setLeads(response.data);
      })
      .catch(error => {
        console.error('Error fetching leads:', error);
      });
  }, []);

  const handleEdit = (id) => {
    navigate(`/edit-lead/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this lead?")) {
    axios.delete(`${config.apiHost}/delete-lead/${id}`)
      .then(response => {
        console.log('Lead deleted successfully:', response);
        // Remove the lead from state after successful deletion
        setLeads(leads.filter(lead => lead.id !== id));
      })
      .catch(error => {
        console.error('Error deleting lead:', error);
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className='d-flex justify-content-between'>
        <h2>Leads List</h2>
        <Link to="/add-lead" className="btn btn-outline-dark mb-3">Add Lead</Link>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leads.map(lead => (
            <tr key={lead.id}>
              <td>{lead.id}</td>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.phone}</td>
              <td>{lead.message}</td>
              <td>
                <FaEdit 
                  onClick={() => handleEdit(lead.id)} 
                  style={{ cursor: 'pointer', marginRight: '10px' }} 
                />
                <FaTrash 
                  onClick={() => handleDelete(lead.id)} 
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

export default LeadList;
//updated