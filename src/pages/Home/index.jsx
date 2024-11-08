import React from 'react';
import Layout from '../../components/layout/Layout';
import Button from '../../components/common/Button/Button';
import './Home.css';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Website</h1>
          <p>Discover amazing products and services that will transform your life</p>
          <Button onClick={() => console.log('Get Started clicked')}>
            Get Started
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Home; 