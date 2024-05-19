import React from 'react';
import './InfoFormStyles.css';
import {images} from '../assets/images';

const InfoForm: React.FC = () => {
  return (

    <div className="info-form-container">

      <div className="info-form-picture">
        <div className="info-form-picture-frame">
          <img src={images['pfp']}  alt="Profile" className="info-form-picture-image" />
        </div>
      </div>


      <div className="info-form-row">
        <div className="info-form-field">
          <label className="info-form-label">First name</label>
          <input className="info-form-input" type="text" value="Killan" readOnly />
        </div>

        <div className="info-form-field">
          <label className="info-form-label">Last name</label>
          <input className="info-form-input" type="text" value="James" readOnly />
        </div>
      </div>

      <div className="info-form-field email-field">
        <label className="info-form-label">Email</label>
        <div className="info-form-input-with-icon">
        <img src={images['iconMail']}  alt="Profile" className="info-form-icon" />

          <input className="info-form-input-em email-input" type="email" value="killanjames@gmail.com" readOnly />
        </div>
      </div>

      <button className="info-form-logout-button">
        Log out
      </button>
    </div>
  );
};

export default InfoForm;
