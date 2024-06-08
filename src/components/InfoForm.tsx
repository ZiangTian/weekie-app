import React,{useState} from 'react';
import './InfoFormStyles.css';
import {images} from '../assets/images';

const InfoForm: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const saveUserInfo = () => {
    console.log('User Info:', { firstName, lastName, email });
  };

  const handleLogout = () => {
    console.log('User logged out');
    window.location.href = '/login';
  };

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
          <input
            className={`info-form-input ${!firstName ? 'placeholder' : 'filled'}`}
            type="text"
            value={firstName}
            placeholder="Killan"
            onChange={(e) => setFirstName(e.target.value)}
            onBlur={saveUserInfo}
          />
        </div>

        <div className="info-form-field">
          <label className="info-form-label">Last name</label>
          <input
            className={`info-form-input ${!lastName ? 'placeholder' : 'filled'}`}
            type="text"
            value={lastName}
            placeholder="James"
            onChange={(e) => setLastName(e.target.value)}
            onBlur={saveUserInfo}
          />
        </div>
      </div>

      <div className="info-form-field email-field">
        <label className="info-form-label">Email</label>
        <div className="info-form-input-with-icon">
        <img src={images['iconMail']}  alt="Profile" className="info-form-icon" />

        <input
            className={`info-form-input-em email-input ${!email ? 'placeholder' : 'filled'}`}
            type="email"
            value={email}
            placeholder="killanjames@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            onBlur={saveUserInfo}
          />
        </div>
      </div>

      <button onClick={handleLogout} className="info-form-logout-button">
        Log out
      </button>
    </div>
  );
};

export default InfoForm;
