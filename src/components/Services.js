import React, { useState } from 'react';
import './Services.css';
import chat from '../img/chat.jpg';
import chat1 from '../img/téléchargement.jpg';
import chir from '../img/chirurgie.jpeg';

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    { title: 'Consultations', description: 'Des consultations vétérinaires de qualité pour assurer la santé de vos animaux.', image: chat },
    { title: 'Vaccinations', description: 'Offrez à votre animal les meilleures protections avec nos services de vaccination.', image: chat1 },
    { title: 'Chirurgie', description: 'Des interventions chirurgicales réalisées par des vétérinaires expérimentés.', image: chir },
    { title: 'Soins dentaires', description: 'Des soins dentaires spécialisés pour améliorer la santé bucco-dentaire de votre animal.', image: chat },
    { title: 'Soins d\'urgence', description: 'Nous sommes disponibles 24/7 pour gérer toutes les urgences vétérinaires.', image: chat },
    { title: 'Vente de produits', description: 'Large sélection de produits pour la santé, le confort et le bien-être de vos animaux.', image: chat },
  ];

  return (
    <div className="services-section py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-4 text-success">Nos Services</h1>
          <p className="text-muted">Découvrez les services que nous proposons pour prendre soin de votre compagnon.</p>
        </div>

        <div className="tabs-container d-flex justify-content-center mb-4">
          {services.map((service, index) => (
            <button
              key={index}
              className={`tab-button ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {service.title}
            </button>
          ))}
        </div>

        <div className="service-details text-center">
          <img src={services[activeTab].image} alt={services[activeTab].title} className="service-image" />
          <h3>{services[activeTab].title}</h3>
          <p>{services[activeTab].description}</p>
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
