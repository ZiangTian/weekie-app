import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInForm from './SignInForm'; // 导入 SignInForm 组件
import './Login.css'; // 导入自定义的CSS

interface LoginProps {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      setIsAuthenticated(true);
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <SignInForm /> {/* 使用 SignInForm 组件 */}
    </div>
  );
};

export default Login;
