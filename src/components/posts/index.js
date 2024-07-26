import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import config from '../../config';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axios.get(`${config.apiHost}:${config.apiPort}/posts`);
            setPosts(response.data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const deletePost = async (id) => {
        if (window.confirm("Are you sure you want to delete this post?")) {
        try {
            await axios.delete(`${config.apiHost}:${config.apiPort}/posts/${id}`);
            fetchPosts();
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Posts</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Facebook ID</th>
                        <th>Title</th>
                        <th>Created Date</th>
                        <th>Updated Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.facebook_id}</td>
                            <td>{post.title}</td>
                            <td>{new Date(post.created_at).toLocaleString()}</td>
                            <td>{new Date(post.updated_at).toLocaleString()}</td>
                            <td>
                                <button className="btn btn-primary me-2" onClick={() => navigate(`/edit-post/${post.id}`)}>Edit</button>
                                <button className="btn btn-danger" onClick={() => deletePost(post.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/add-post" className="btn btn-success mt-4">Add New Post</Link>
        </div>
    );
};

export default Posts;
