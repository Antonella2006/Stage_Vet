import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaConciergeBell, FaStore, FaUsers, FaPhone, FaSearch } from 'react-icons/fa';
import chatImage from '../img/téléchargement.jpg';

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{
        backgroundColor: '#28a745',
        padding: '1rem 1.5rem',
        fontSize: '1.2rem',
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={chatImage}
            alt="Logo"
            style={{
              width: '100px',
              height: '100px',
              marginRight: '10px',
            }}
          />
          <span
            className="text-white"
            style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
          >
            Animals & Co
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" aria-current="page" to="/">
                <FaHome style={{ marginRight: '5px' }} /> Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/services">
                <FaConciergeBell style={{ marginRight: '5px' }} /> Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Animalerie">
                <FaStore style={{ marginRight: '5px' }} />Animalerie
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Equipe">
                <FaUsers style={{ marginRight: '5px' }} /> Equipes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Contact">
                <FaPhone style={{ marginRight: '5px' }} /> Contact
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <div
              className="input-group"
              style={{
                borderRadius: '50px',
                overflow: 'hidden',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              <span
                className="input-group-text"
                style={{
                  backgroundColor: '#e9f5ea',
                  border: 'none',
                  borderRadius: '50px 0 0 50px',
                }}
              >
                <FaSearch />
              </span>
              <input
                className="form-control"
                type="search"
                placeholder="Recherche..."
                aria-label="Search"
                style={{
                  backgroundColor: '#e9f5ea',
                  border: 'none',
                  borderRadius: '0 50px 50px 0',
                  padding: '0.6rem 1rem',
                  fontSize: '1rem',
                  width: '400px',
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
