import React from 'react';
import './SignInForm.css';

interface SignUpFormProps {
  username: string;
  password: string;
  onUsernameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEMailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  username,
  password,
  onUsernameChange,
  onPasswordChange,
  onEMailChange,
  onSubmit,
}) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <form className="signin-container" onSubmit={onSubmit}>
      <div className="signin-box">
        <div className="signin-header">Glad you're joining us :)</div>
        <div className="signin-form">
          <div className="signin-input-group">
            <label className="signin-label">Login</label>
            <div className="signin-input-container">
              <input
                className="signin-input"
                type="text"
                placeholder="Email"
                value={username}
                onChange={onEMailChange}
                onKeyPress={handleKeyPress}
              />
            </div>
          </div>
          <div className="signin-input-group">
            <label className="signin-label">Password</label>
            <div className="signin-input-container">
              <input
                className="signin-input"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={onPasswordChange}
                onKeyPress={handleKeyPress}
              />
            </div>
          </div>
          <div className="signin-input-group">
            <label className="signin-label">UserName</label>
            <div className="signin-input-container">
              <input
                className="signin-input"
                type="text"
                placeholder="Enter UserName"
                value={password}
                onChange={onUsernameChange}
                onKeyPress={handleKeyPress}
              />
            </div>
          </div>
          
          {/* <div className="signin-options">
            <div className="remember-me">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <div className="forgot-password">Forgot password?</div>
          </div> */}
        </div>
        <button type="submit" className="signin-button">Sign in</button>
      </div>
      <div className="signin-footer">
        <span>Don't have an account?</span>
        <a href="/signup">Sign up now</a>
      </div>
    </form>
  );
};

export default SignUpForm;
