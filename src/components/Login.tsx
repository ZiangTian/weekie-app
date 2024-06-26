// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import SignInForm from './SignInForm';
// import './LoginStyles.css';
// import {images} from "../assets/images"; // 导入图片

// interface LoginProps {
//     setIsAuthenticated: (isAuthenticated: boolean) => void;
// }

// const Login: React.FC<LoginProps> = ({ setIsAuthenticated }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
  
//     try {
//       const response = await fetch('/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });
  
//       if (!response.ok) {
//         throw new Error('Login failed');
//       }
  
//       const data = await response.json();
  
//       if (data.success) {
//         setIsAuthenticated(true);
//         navigate('/home');
//       } else {
//         alert(data.error);
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       alert('Login failed');
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-image-container">
//         <img 
//           src={images['loginImg']} 
//           alt="Login"
//           className="login-image"
//         />
//       </div>
//       <div className="login-form-container">
//         <div className="login-logo-container">
//         <img 
//           src={images['logo']} 
//           alt="logo"
//           className="login-logo"
//         />
//         </div>
//         <SignInForm
//           username={username}
//           password={password}
//           onUsernameChange={(e) => setUsername(e.target.value)}
//           onPasswordChange={(e) => setPassword(e.target.value)}
//           onSubmit={handleLogin}
//         />
//       </div>
//     </div>
//   );
// };

// export default Login;
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInForm from './SignInForm';
import './LoginStyles.css';
import {images} from "../assets/images"; // 导入图片

interface LoginProps {
    setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async(e: React.FormEvent,username: string, password: string) => {
    e.preventDefault();
    // 
    const response = await axios.get(`http://47.115.213.200/api/login?username=${username}&password=${password}`);

    if (response.data.code=='1') {
      localStorage.setItem("token",response.data.data.jwt);
      setIsAuthenticated(true);
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
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
        <SignInForm
          username={username}
          password={password}
          onUsernameChange={(e) => setUsername(e.target.value)}
          onPasswordChange={(e) => setPassword(e.target.value)}
          onSubmit={(e)=>handleLogin(e,username,password)}
        />
      </div>
    </div>
  );
};

export default Login;
