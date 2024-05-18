// GradientComponent.js

import React from 'react';
import './GradientComponentStyles.css';
import { images } from '../assets/images'; // 导入图标

const GradientComponent = () => {
  return (
    <div className="gradient-container">
      <div className="gradient-background"></div>
      <div className="gradient-text">9</div>
      <div className="gradient-subelement">
        <img 
          src={images['iconAdd']} 
          alt="iconAdd"
        //   className="menu-icon"
        />
      </div>
    </div>
  );
};

export default GradientComponent;

