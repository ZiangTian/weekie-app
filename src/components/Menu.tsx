import React from 'react';
import './MenuStyles.css';
import { images } from '../assets/images'; // 导入图标

const Menu: React.FC = () => {
  return (
    <div className="menu-container">
      {/* <div className="menu-background" /> */}
      {/* <div className="menu-highlight" /> */}
      
      <img 
        src={images['iconLogo']} 
        alt="iconLogo"
        className="menu-logo"
      />

      <div className="menu-item">
        <img 
          src={images['iconHome']} 
          alt="iconHome"
          className="menu-icon"
        />
        <div className="menu-text">Home</div>
      </div>

      <div className="menu-item">
        <img 
          src={images['iconProf']} 
          alt="iconProf"
          className="menu-icon"
        />
        <div className="menu-text">Profile</div>
      </div>
    </div>
  );
};

export default Menu;
