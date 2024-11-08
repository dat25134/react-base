import React from 'react';
import Layout from '../../components/layout/Layout';
import './About.css';

const About = () => {
  const teamMembers = [
    {
      name: "John Doe",
      position: "CEO",
      image: "https://via.placeholder.com/150",
      description: "10+ years of industry experience"
    },
    {
      name: "Jane Smith",
      position: "CTO",
      image: "https://via.placeholder.com/150",
      description: "Expert in technology solutions"
    },
    {
      name: "Mike Johnson",
      position: "Design Lead",
      image: "https://via.placeholder.com/150",
      description: "Creative design professional"
    }
  ];

  return (
    <Layout>
      {/* About Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Us</h1>
          <p>Learn more about our mission and values</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story">
        <div className="story-content">
          <h2>Our Story</h2>
          <p>Founded in 2020</p>
        </div>
      </section>
    </Layout>
  );
};

export default About; 