import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/winspark.in_.png";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Do you really want to logout?");
    if (confirmLogout) {
      sessionStorage.clear(); // Example: Clearing session storage
      navigate('/');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <img 
          src={logo}
          alt="winspark-logo" 
          style={{ height: '40px', marginRight: '10px' }} // Adjust logo size and margin if needed
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/leads-list">
                Leads
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/channels-list">
                Channels
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users-list">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/posts">
                Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/inbox">
                Inbox
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item dropdown">
              <button
                className="btn btn-link nav-link dropdown-toggle"
                type="button"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Account
              </button>
              <ul className="dropdown-menu" style={{left:'-75px'}} aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/change-password">
                    Change Password
                  </Link>
                </li>
                <li>
                  <button className="dropdown-item" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

