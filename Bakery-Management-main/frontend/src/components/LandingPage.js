import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-gradient" style={{ background: 'linear-gradient(to right, #f8f9fa, #e9ecef)' }}>
      <div className="text-center px-3">
        <h1 className="display-3 text-dark fw-semibold mb-3">Welcome to My Bakery</h1>
        <p className="lead text-muted mb-4">Manage your bakery inventory and orders with ease</p>
        <Link to="/products" className="btn btn-outline-primary btn-lg px-5 rounded-4 shadow">
          View Products <i className="ms-2 fas fa-bread-slice"></i>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
