import React from 'react';
import vac from '../img/vaccin.jpeg';
import tel from '../img/chirurgie.jpeg';
import cons from '../img/consultation.jpeg';
import '../App.css'; 

const Home = () => {

  const services = [
    {
      title: "Consultations vétérinaires",
      image: cons,
      description: "Assurez la santé de vos animaux avec des consultations régulières adaptées à leurs besoins."
    },
    {
      title: "Vaccinations",
      image: vac,
      description: "Protégez vos animaux avec nos services de vaccination pour éviter les maladies courantes."
    },
    {
      title: "Chirurgie et soins postopératoires",
      image: tel,
      description: "Des interventions chirurgicales de qualité, suivies de soins postopératoires pour une guérison rapide."
    }
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container mt-5 flex-grow-1">
        <header className="text-center mb-5">
          <h2 className="display-4 text-success">Bienvenue au Cabinet Vétérinaire</h2>
          <p className="lead text-muted">
            Nous offrons des soins professionnels et attentionnés pour garantir la santé et le bien-être de vos animaux.
          </p>
        </header>
        <section className="row mb-5 align-items-center">
          <div className="col-md-6">
            <h3 className="text-success">Qui sommes-nous ?</h3>
            <p>
              Notre cabinet vétérinaire s'engage à offrir des soins de qualité à vos animaux. Nous proposons une large gamme de services, 
              allant des consultations de routine aux soins spécialisés, toujours dans un environnement calme et bienveillant.
            </p>
          </div>
          <div className="col-md-6">
            <img src={tel} alt="Cabinet Vétérinaire" className="img-fluid shadow" />
          </div>
        </section>
        <section className="mb-4">
          <h3 className="text-success mb-4">Nos Services</h3>
          <div className="row">
            {services.map((service, index) => (
              <div className="col-md-4 mb-3" key={index}>
                <div className="card shadow-lg border-0">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="card-img-top img-hover" 
                    style={{ height: '200px', objectFit: 'cover' }} 
                  />
                  <div className="card-body">
                    <h5 className="card-title text-success">{service.title}</h5>
                    <p className="card-text text-muted">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <footer className="footer bg-success text-white mt-5 py-4 text-center w-100">
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

export default Home;
