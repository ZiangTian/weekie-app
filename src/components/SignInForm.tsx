import React from 'react';
import './SignInForm.css';

interface SignInFormProps {
  username: string;
  password: string;
  onUsernameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const SignInForm: React.FC<SignInFormProps> = ({
  username,
  password,
  onUsernameChange,
  onPasswordChange,
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
        <div className="signin-header">Nice to see you :)</div>
        <div className="signin-form">
          <div className="signin-input-group">
            <label className="signin-label">Login</label>
            <div className="signin-input-container">
              <input
                className="signin-input"
                type="text"
                placeholder="Email"
                value={username}
                onChange={onUsernameChange}
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
      <span>New user will be assigned a new account upon completion</span>
      </div>
    </form>
  );
};

export default SignInForm;
