import React from 'react';
import './HeaderStyles.css';

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <div className="header-background" />
      <div className="header-title">Schedule</div>
    </div>
  );
};

export default Header;
