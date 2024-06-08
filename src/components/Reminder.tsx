import React from 'react';
import './ReminderStyles.css';
import { images } from '../assets/images';

interface ReminderProps {
  backgroundColor: string;
  count: number;
  name: string;
  onClick: ()=> void;
}

const Reminder: React.FC<ReminderProps> = ({ backgroundColor, count, name, onClick}) => {
  return (
    <div className="reminder-container" onClick={onClick}> 
      <div className="reminder-content">
        <div className="reminder-left">
          <div className="reminder-icon-container" style={{ backgroundColor }}>
          </div>
          <div className="reminder-text-container">
            <div className="reminder-text">{name}</div>
          </div>
        </div>
        <div className="reminder-right">
          <div className="reminder-count">{count}</div>
          <div className="reminder-arrow-container">
            <img src={images['iconArrow']} alt="iconArrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reminder;
