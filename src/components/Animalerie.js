import React, { useEffect, useState } from 'react';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';
import produitImage from '../img/téléchargement.jpg';
import prom from '../img/chat.jpg';
import prom2 from '../img/vaccin.jpeg';

const Animalerie = () => {
  const [visibleProducts, setVisibleProducts] = useState([]);

  const products = [
    {
      name: 'Croquettes pour chiens',
      price: 25000,
      rating: 4.5,
      description: 'Les meilleures croquettes pour votre compagnon à quatre pattes.',
      image: produitImage,
    },
    {
      name: 'Litière pour chat',
      price: 12000,
      rating: 4.0,
      description: 'Offrez à votre chat un confort optimal avec notre litière de qualité.',
      image: produitImage,
    },
    {
      name: 'Jouet pour chiots',
      price: 8000,
      rating: 5.0,
      description: 'Un jouet amusant et durable pour le plaisir de votre chiot.',
      image: produitImage,
    },
    {
      name: 'Collier en cuir',
      price: 15000,
      rating: 4.2,
      description: 'Un collier chic et confortable pour votre animal.',
      image: produitImage,
    },
  ];

  useEffect(() => {
    products.forEach((_, index) => {
      setTimeout(() => {
        setVisibleProducts((prev) => [...prev, index]);
      }, index * 300);
    });
  }, []);

  const promotionProducts = [
    {
      name: 'Promotion : Jouet pour chiots',
      price: 7000,
      originalPrice: 8000, // Prix d'origine avant réduction
      rating: 5.0,
      description: 'Jouet en promotion pour chiots, profitez-en maintenant !',
      image: prom,
      discount: 0.1, // Réduction de 10%
    },
    {
      name: 'Promotion : Collier en cuir',
      price: 13000,
      originalPrice: 15000,
      rating: 4.2,
      description: 'Collier en cuir de qualité en promotion, offrez le meilleur à votre compagnon.',
      image: prom2,
      discount: 0.2, // Réduction de 20%
    },
  ];

  return (
    <div className="animalerie-section py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <p className="lead text-muted">
            Découvrez nos produits pour choyer vos compagnons à quatre pattes !
          </p>
        </div>

        <div className="promotion-carousel mb-5">
          <h2 className="text-center mb-4">Produits en promotion</h2>
          <Carousel indicators={false} controls={true} interval={null}>
            {promotionProducts.map((product, index) => (
              <Carousel.Item key={index}>
                <div className="carousel-item-container">
                  <div
                    className="card shadow-lg border-0 h-100 product-card promo-card"
                    style={{ maxWidth: '350px', margin: '0 auto', position: 'relative' }}
                  >
                    {/* Badge Promo */}
                    <span
                      className="badge bg-warning text-dark position-absolute"
                      style={{ top: '10px', left: '10px', fontSize: '0.8rem', padding: '0.3rem 0.5rem', borderRadius: '10px' }}
                    >
                      Promo
                    </span>

                    <img
                      src={product.image}
                      alt={product.name}
                      className="card-img-top product-image"
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title text-dark fw-bold">{product.name}</h5>
                      <p className="card-text text-dark">{product.description}</p>
                      <div className="d-flex justify-content-center align-items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={i < product.rating ? 'text-warning' : 'text-secondary'}
                          />
                        ))}
                      </div>
                      {/* Affichage du prix avec réduction */}
                      <h6 className="fw-bold text-dark">
                        <span
                          className="text-muted text-decoration-line-through"
                          style={{ fontSize: '0.9rem' }}
                        >
                          {product.originalPrice.toLocaleString()} Ariary
                        </span>
                        {' '}
                        {product.price.toLocaleString()} Ariary
                      </h6>
                      {/* Affichage de la réduction */}
                      <span
                        className="badge bg-danger text-white"
                        style={{
                          fontSize: '0.8rem',
                          padding: '0.3rem 0.5rem',
                          borderRadius: '5px',
                          marginTop: '10px',
                        }}
                      >
                        {Math.round(product.discount * 100)}% Off
                      </span>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {products.map((product, index) => (
            <div key={index} className="col">
              <div
                className={`card shadow-lg border-0 h-100 product-card ${
                  visibleProducts.includes(index) ? 'visible' : ''
                }`}
                style={{ maxWidth: '350px', margin: '0 auto' }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top product-image"
                />
                <div className="card-body text-center">
                  <h5 className="card-title text-success fw-bold">{product.name}</h5>
                  <p className="card-text text-muted">{product.description}</p>
                  <div className="d-flex justify-content-center align-items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={i < product.rating ? 'text-warning' : 'text-secondary'}
                      />
                    ))}
                  </div>
                  {/* Affichage du prix sans réduction */}
                  <h6 className="fw-bold">{product.price.toLocaleString()} Ariary</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer bg-success text-white mt-5 py-4 text-center">
        <div className="container">
          <p className="mb-2">&copy; 2025 Cabinet Vétérinaire | Tous droits réservés</p>
          <div className="social-icons">
            <a href="#" className="text-white mx-2">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white mx-2">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Animalerie;
