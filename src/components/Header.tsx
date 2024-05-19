import React from 'react';
import './HeaderStyles.css';

const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="header-container">
      <div className="header-background" />
      <div className="header-title">{title}</div>
    </div>
  );
};

export default Header;

