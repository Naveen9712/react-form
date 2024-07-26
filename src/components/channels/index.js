import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import config from '../../config';


const ChannelsList = () => {
  const [channels, setChannels] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get(`${config.apiHost}:${config.apiPort}/channels`)
      .then(response => {
        setChannels(response.data);
      })
      .catch(error => {
        console.error('Error fetching channels:', error);
      });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this channel?")) {
    axios.delete(`${config.apiHost}:${config.apiPort}/channels/${id}`)
      .then(response => {
        console.log('Channel deleted successfully:', response);
        setChannels(channels.filter(channel => channel.id !== id));
      })
      .catch(error => {
        console.error('Error deleting channel:', error);
      });
    }
  };

  const handleLogoClick = (channel) => {
    setSelectedChannel(channel);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mt-5">
      <div className='d-flex justify-content-between'>
        <h2>Channels List</h2>
        <Link to="/add-channel" className="btn btn-outline-dark mb-3">Add Channel</Link>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Logo</th>
            <th>ID</th>
            <th>Name</th>
            <th>Display Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {channels.map(channel => (
            <tr key={channel.id}>
              <td>
                <img 
                  src={"https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png"} 
                  alt={channel.name} 
                  style={{ cursor: 'pointer', width: '50px', height: '50px' }} 
                  onClick={() => handleLogoClick(channel)} 
                />
              </td>
              <td>{channel.id}</td>
              <td>{channel.name}</td>
              <td>{channel.display_name}</td>
              <td>
                <Link to={`/edit-channel/${channel.id}`} className="me-2">
                  <FaEdit style={{ cursor: 'pointer', marginRight: '10px' }} />
                </Link>
                <FaTrash onClick={() => handleDelete(channel.id)} style={{ cursor: 'pointer' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedChannel && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedChannel.display_name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img 
              src={'https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png'} 
              alt={selectedChannel.name} 
              style={{ width: '25%', height: 'auto' }} 
            />
            <p>ID: {selectedChannel.id}</p>
            <p>Name: {selectedChannel.name}</p>
            <p>Display Name: {selectedChannel.display_name}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default ChannelsList;
