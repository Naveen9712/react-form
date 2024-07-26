import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="container mt-5">
        <h1>Dashboard</h1>
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Lead Details</h5>
                <p className="card-text">View and update your lead details.</p>
                <Link to="/LeadsList" className="btn btn-primary">Go to Lead Details</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Users List</h5>
                <p className="card-text">View and update your user details.</p>
                <Link to="/UsersList" className="btn btn-primary">Go to Users List</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Lead Form</h5>
                <p className="card-text">Fill up the Leads.</p>
                <Link to="/Lead" className="btn btn-primary">Go to Lead Form</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
