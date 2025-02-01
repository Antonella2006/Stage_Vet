import React from 'react';
import '../App.css';
import vet1 from '../img/chat.jpg';

const teamMembers = [
  {
    id: 1,
    name: 'Dr. Sophie Martin',
    role: 'Vétérinaire en Chef',
    image: vet1,
    description:
      'Dr. Sophie Martin est spécialisée en chirurgie et en soins intensifs pour animaux de compagnie.',
  },
  {
    id: 2,
    name: 'Dr. Julien Lefèvre',
    role: 'Vétérinaire Comportementaliste',
    image: vet1,
    description:
      'Dr. Julien aide vos animaux à résoudre leurs problèmes de comportement avec douceur et expertise.',
  },
  {
    id: 3,
    name: 'Dr. Clara Dubois',
    role: 'Nutritionniste pour Animaux',
    image: vet1,
    description:
      'Dr. Clara conseille sur la meilleure alimentation pour garder vos animaux en pleine santé.',
  },
  {
    id: 4,
    name: 'Dr. Thomas Morel',
    role: 'Spécialiste des Animaux Exotiques',
    image: vet1,
    description:
      'Dr. Thomas prend soin des oiseaux, reptiles et autres animaux exotiques avec passion.',
  },
  {
    id: 5,
    name: 'Mme Andy',
    role: 'Receptionniste',
    image: vet1,
    description:
      'Mme Andy ....................',
  },
];

const TeamCard = ({ member }) => (
  <div className="col-md-6 col-lg-4 d-flex justify-content-center">
    <div
      className="card team-card shadow-sm mb-4"
      style={{ maxWidth: '18rem' }}
    >
      <img
        src={member.image}
        alt={member.name}
        className="card-img-top team-photo"
        style={{ height: '150px', objectFit: 'cover' }}
      />
      <div className="card-body text-center">
        <h5 className="card-title fw-bold">{member.name}</h5>
        <p className="text-muted">{member.role}</p>
        <p className="card-text">{member.description}</p>
      </div>
    </div>
  </div>
);

const Team = () => {
  return (
    <div className="team-section py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-4 text-success">Notre Équipe Vétérinaire</h1>
          <p className="text-muted">
            Nous sommes fiers de vous présenter notre équipe dévouée de vétérinaires et de spécialistes animaliers.
            Avec des années d'expérience et une passion inébranlable pour le bien-être des animaux, notre équipe 
            travaille sans relâche pour offrir des soins de la plus haute qualité à vos compagnons. Nous croyons 
            fermement que chaque animal mérite amour, attention et expertise.
          </p>
        </div>
        <div className="row">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
      <footer className="text-center mt-5">
        <p className="text-success">&copy; 2025 Cabinet Vétérinaire | Tous droits réservés</p>
      </footer>
    </div>
    
  );
};

export default Team;
