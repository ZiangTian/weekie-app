import React from 'react';
import './ProfileStyles.css';
import Header from '../components/Header';
import Menu from '../components/Menu';

const Profile: React.FC = () => {
  return (
    <div className="profile-page">
      <div className="header">
        <Header />
      </div>
      
      <div className="menu">
        <Menu />
      </div>
      
      <div className="content">
        {/* whateves */}

      </div>
    </div>
  );
};

export default Profile;
