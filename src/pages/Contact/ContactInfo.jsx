import React from 'react';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: '📍',
      title: 'Address',
      content: '123 Business Street, New York, NY 10001',
    },
    {
      icon: '📞',
      title: 'Phone',
      content: '+1 (555) 123-4567',
    },
    {
      icon: '✉️',
      title: 'Email',
      content: 'contact@yourcompany.com',
    },
    {
      icon: '⏰',
      title: 'Working Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM',
    },
  ];

  return (
    <div className="contact-info">
      <h2>Contact Information</h2>
      
      <div className="contact-details">
        {contactDetails.map((detail, index) => (
          <div key={index} className="contact-detail-item">
            <span className="contact-icon">{detail.icon}</span>
            <div className="contact-detail-content">
              <h3>{detail.title}</h3>
              <p>{detail.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="social-links">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo; 