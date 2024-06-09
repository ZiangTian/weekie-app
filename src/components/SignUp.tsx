import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import './LoginStyles.css';
import {images} from "../assets/images"; // 导入图片


interface LoginProps {
  setIsCompleted: (isCompleted: boolean) => void;
}

const SignUp: React.FC<LoginProps> = ({ setIsCompleted }) => {
  const [email, setEmail] = useState(''); // 添加 email 状态
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // wait for the backend to pass data and set isCompleted to true
    setIsCompleted(true);

    // 
  };

  return (
    <div className="login-page">
      <div className="login-image-container">
        <img 
          src={images['loginImg']} 
          alt="Login"
          className="login-image"
        />
      </div>
      <div className="login-form-container">
        <div className="login-logo-container">
        <img 
          src={images['logo']} 
          alt="logo"
          className="login-logo"
        />
        </div>
        <SignUpForm
          username={username}
          password={password}
          onEMailChange={(e) => setEmail(e.target.value)}
          onUsernameChange={(e) => setUsername(e.target.value)}
          onPasswordChange={(e) => setPassword(e.target.value)}
          onSubmit={handleSignUp}
        />
      </div>
    </div>
  );
};

export default SignUp;
