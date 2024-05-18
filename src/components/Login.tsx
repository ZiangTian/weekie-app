import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    // 简单的用户名和密码验证
    if (username === 'user' && password === 'password') {
      setIsAuthenticated(true);
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Username: </label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
