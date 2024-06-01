// GradientComponent.js

import React from 'react';
import './GradientComponentStyles.css';
import { images } from '../assets/images';

interface GradientProps {
  number: number; 
  addTask: () => void; // 添加addTask属性
  onClick?: () => void;
}

const GradientComponent: React.FC<GradientProps> = ({ number, addTask, onClick }) => {
  return (
    <div className="gradient-container">
      <div className="gradient-background"></div>
      <div className="gradient-text">{number}</div>
      <button className="gradient-subelement" onClick={onClick}>
        <img 
          src={images['iconAdd']} 
          alt="iconAdd"
        />
      </button>
    </div>
  );
};

export default GradientComponent;


