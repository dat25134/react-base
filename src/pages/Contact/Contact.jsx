import React from 'react';
import Layout from '../../components/layout/Layout';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import './Contact.css';

const Contact = () => {
  return (
    <Layout>
      <div className="contact-page">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>Get in touch with us for any questions or concerns</p>
        </div>
        
        <div className="contact-container">
          <div className="contact-info-section">
            <ContactInfo />
          </div>
          
          <div className="contact-form-section">
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;