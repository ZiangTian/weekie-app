import React from 'react';
import './SignInForm.css'; 

const SignInForm: React.FC = () => {
  return (
    <div className="signin-container">
      <div className="signin-box">
        <div className="signin-header">Nice to see you :)</div>
        <div className="signin-form">
          <div className="signin-input-group">
            <label className="signin-label">Login</label>
            <div className="signin-input-container">
              <input className="signin-input" type="text" placeholder="Email" />
            </div>
          </div>
          <div className="signin-input-group">
            <label className="signin-label">Password</label>
            <div className="signin-input-container">
              <input className="signin-input" type="password" placeholder="Enter password" />
            </div>
          </div>
          <div className="signin-options">
            <div className="remember-me">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <div className="forgot-password">Forgot password?</div>
          </div>
        </div>
        <button className="signin-button">Sign in</button>
      </div>
      <div className="signin-footer">
        <span>Dont have an account?</span>
        <a href="/signup">Sign up now</a>
      </div>
    </div>
  );
};

export default SignInForm;
