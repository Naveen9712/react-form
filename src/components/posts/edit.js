import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import config from '../../config';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({ facebook_id: '', title: '' });

  useEffect(() => {
    axios.get(`${config.apiHost}/posts/${id}`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error('Error fetching post:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`${config.apiHost}/update-post/${id}`, post)
      .then(response => {
        navigate('/posts');
      })
      .catch(error => {
        console.error('Error updating post:', error);
      });
  };

  return (
    <div className="container mt-5">
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="facebook_id" className="form-label">Facebook ID</label>
          <input 
            type="text" 
            className="form-control" 
            id="facebook_id" 
            name="facebook_id" 
            value={post.facebook_id} 
            onChange={handleChange} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input 
            type="text" 
            className="form-control" 
            id="title" 
            name="title" 
            value={post.title} 
            onChange={handleChange} 
          />
        </div>
        <button type="submit" className="btn btn-primary">Save Changes</button>
      </form>
    </div>
  );
};

export default EditPost;
