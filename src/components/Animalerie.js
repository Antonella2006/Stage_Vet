import React, { useEffect, useState } from 'react';
import './Animalerie.css';
import produitImage from '../img/téléchargement.jpg';
import { FaStar, FaShoppingCart } from 'react-icons/fa';

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

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar key={i} className={`star ${i <= rating ? 'filled' : ''}`} />
      );
    }
    return stars;
  };

  useEffect(() => {
    products.forEach((product, index) => {
      setTimeout(() => {
        setVisibleProducts((prev) => [...prev, index]);
      }, index * 300); 
    });
  }, []);

  return (
    <div className="animalerie-section py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-4 text-success font-weight-bold">Bienvenue à l'Animalerie</h1>
          <p className="lead text-muted">
            Découvrez nos produits pour choyer vos compagnons à quatre pattes. Un large choix pour leur bien-être !
          </p>
        </div>

        <div className="row">
          {products.map((product, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div
                className={`product-card ${visibleProducts.includes(index) ? 'visible' : ''}`}
              >
                <img src={product.image} alt={product.name} className="product-image" />
                <h4 className="product-title mt-3">{product.name}</h4>
                <p className="product-description">{product.description}</p>
                <div className="product-rating">{renderStars(product.rating)}</div>
                <div className="product-price">{product.price.toLocaleString()} Ariary</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer bg-success text-white mt-5 py-4">
        <div className="container text-center">
          <p className="mb-2">&copy; 2025 Cabinet Vétérinaire | Tous droits réservés</p>
          <div className="social-icons">
            <a href="#" className="text-white mx-2"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-white mx-2"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white mx-2"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Animalerie;