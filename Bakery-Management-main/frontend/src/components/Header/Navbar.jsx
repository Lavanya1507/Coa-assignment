import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          My Bakery
        </Link>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item px-2">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            {user && (
              <li className="nav-item px-2">
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
              </li>
            )}
          </ul>
          <div className="d-flex align-items-center">
            {!user ? (
              <>
                <Link className="btn btn-outline-light me-3" to="/login">
                  Login
                </Link>
                <Link className="btn btn-outline-warning" to="/register">
                  Register
                </Link>
              </>
            ) : (
              <button
                className="btn btn-outline-danger px-3 py-1 border-2"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
