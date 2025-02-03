import React, { useState } from 'react';
import './Services.css';
import chat from '../img/chat.jpg';
import chat1 from '../img/téléchargement.jpg';
const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      title: 'Consultations',
      description: 'Des consultations vétérinaires de qualité pour assurer la santé de vos animaux.',
      image: chat,
    },
    {
      title: 'Vaccinations',
      description: 'Offrez à votre animal les meilleures protections avec nos services de vaccination.',
      image: chat1,
    },
    {
      title: 'Chirurgie',
      description: 'Des interventions chirurgicales réalisées par des vétérinaires expérimentés.',
      image: chat,
    },
    {
      title: 'Soins dentaires',
      description: 'Des soins dentaires spécialisés pour améliorer la santé bucco-dentaire de votre animal.',
      image: chat,
    },
    {
      title: 'Soins d\'urgence',
      description: 'Nous sommes disponibles 24/7 pour gérer toutes les urgences vétérinaires.',
      image: chat,
    },
    {
      title: 'Vente de produits',
      description: 'Large sélection de produits pour la santé, le confort et le bien-être de vos animaux.',
      image: chat,
    },
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  return (
    <div className="services-section py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-4 text-success">Nos Services</h1>
          <p className="text-muted">
            Découvrez les services que nous proposons pour prendre soin de votre compagnon.
          </p>
        </div>

        {/* Service Display */}
        <div className="service-display d-flex align-items-center justify-content-center">
          <button className="arrow-button left" onClick={goToPrev}>
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className="service-card">
            <img src={services[currentIndex].image} alt={services[currentIndex].title} className="service-image" />
            <h4>{services[currentIndex].title}</h4>
            <p>{services[currentIndex].description}</p>
          </div>

          <button className="arrow-button right" onClick={goToNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="dots-container text-center mt-4">
          {services.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
      <footer className="footer bg-success text-white mt-5 py-4 text-center">
        <div className="container">
          <p className="mb-2">&copy; 2025 Cabinet Vétérinaire | Tous droits réservés</p>
          <div className="social-icons">
            <a href="#" className="text-white mx-2"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-white mx-2"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </footer>
    </div>
    
  );
};

export default Services;
