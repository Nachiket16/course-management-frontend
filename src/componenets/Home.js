import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="intro">
        <h1>🚀 Welcome to My Portfolio</h1>
        <p>
          This project has a Spring Boot backend and React as the frontend.
        </p>
        <p>🛢️ For the database, it uses MySQL deployed on AWS RDS.</p>
        <p>🚧 CI/CD is implemented using GitHub Actions + Docker Hub + AWS EC2.</p>
        <Link to="/about" className="btn-primary">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Home;
