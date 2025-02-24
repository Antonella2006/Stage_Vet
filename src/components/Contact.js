import React from 'react';
import '../App.css';

const Contact = () => {
  return (
    <div className="contact-section py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-4 text-success">Contactez-nous</h1>
          <p className="text-muted">Nous sommes toujours disponibles pour répondre à vos questions ou fixer un rendez-vous pour votre compagnon.</p>
          <p className="text-muted">Que vous ayez besoin de plus d'informations ou d'une consultation, notre équipe est là pour vous aider.</p>
        </div>
        <div className="row mb-5">
          <div className="col-12 d-flex justify-content-center">
            <div className="text-center d-flex align-items-center">
              <p className="mb-1 me-4"><i className="fas fa-map-marker-alt text-success me-2"></i><strong>Adresse :</strong> Rue 123, Analakely, Antananarivo, Madagascar</p>
              <p className="mb-1 me-4"><i className="fas fa-phone-alt text-success me-2"></i><strong>Téléphone :</strong> +261 34 12 345 67</p>
              <p className="mb-1"><i className="fas fa-envelope text-success me-2"></i><strong>Email :</strong> contact@animalerie.com</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe title="Google Maps" className="embed-responsive-item w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25291.943930774555!2d47.5284541131479!3d-18.879190090197543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07d7030af6a6d%3A0x3eae3b4e4b671028!2sAntananarivo!5e0!3m2!1sen!2smg!4v1234567890123" allowFullScreen="" loading="lazy" style={{ border: 0, height: '400px' }}></iframe>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title text-center fw-bold">Prendre Rendez-vous</h5>
                <p className="text-muted text-center mb-4">Vous pouvez prendre rendez-vous en remplissant le formulaire ci-dessous. Nous vous répondrons dans les plus brefs délais.</p>
                <form>
                  <div className="mb-3"><label htmlFor="name" className="form-label">Nom complet</label><input type="text" className="form-control" id="name" placeholder="Votre nom complet" required /></div>
                  <div className="mb-3"><label htmlFor="email" className="form-label">Email</label><input type="email" className="form-control" id="email" placeholder="Votre email" required /></div>
                  <div className="mb-3"><label htmlFor="phone" className="form-label">Téléphone</label><input type="tel" className="form-control" id="phone" placeholder="Votre numéro de téléphone" required /></div>
                  <div className="mb-3"><label htmlFor="message" className="form-label">Message</label><textarea className="form-control" id="message" rows="4" placeholder="Votre message..." required></textarea></div>
                  <button type="submit" className="btn btn-success w-100"><i className="fas fa-paper-plane me-2"></i>Envoyer</button>
                </form>
              </div>
            </div>
          </div>
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

export default Contact;
