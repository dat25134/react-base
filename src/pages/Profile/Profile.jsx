import React from 'react';
import Layout from '../../components/layout/Layout';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/slices/authSlice';
import './Profile.css';

const Profile = () => {
  const user = useSelector(selectUser);

  return (
    <Layout>
      <div className="profile-page">
        <div className="profile-header">
          <h1>Profile</h1>
        </div>
        
        <div className="profile-content">
          <div className="profile-info">
            <div className="info-group">
              <label>Email:</label>
              <p>{user.email}</p>
            </div>
            
            <div className="info-group">
              <label>Roles:</label>
              <p>{user.roles.join(', ')}</p>
            </div>
            
            {/* Add more user information here */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile; 