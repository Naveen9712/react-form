import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import config from '../../config';

const AddPost = () => {
    const [post, setPost] = useState({ facebook_id: '', title: '' });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPost({ ...post, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${config.apiHost}/posts`, post);
            navigate('/posts');
        } catch (error) {
            console.error('Error adding post:', error);
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Add Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Facebook ID</label>
                    <input
                        type="text"
                        className="form-control"
                        name="facebook_id"
                        value={post.facebook_id}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        value={post.title}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-success">Add Post</button>
            </form>
        </div>
    );
};

export default AddPost;
