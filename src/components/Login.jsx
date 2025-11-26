import React, { useState } from 'react';
import '../styles/Login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Validate credentials
    if (email === 'admin@gmail.com' && password === 'Tom@123') {
      onLogin();
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-container">
          <div className="logo">
            <div className="logo-icon">
              <img 
                src="https://www.tom.sg/wp-content/uploads/2021/11/tom_logo-300x135.png" 
                alt="TOM Logo" 
              />
            </div>
          </div>
          
          <div className="auth-header">
            {/* <h1>Log In</h1> */}
            {/* <p>Sign in to access your enterprise dashboard</p> */}
          </div>
          
          <form className="auth-form" onSubmit={handleSubmit}>
            {error && (
              <div style={{
                backgroundColor: '#fee',
                color: '#c33',
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                marginBottom: '1rem',
                fontSize: '0.875rem',
                border: '1px solid #fcc',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <i className="fas fa-exclamation-circle"></i>
                {error}
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="form-input" 
                placeholder="your.email@company.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input 
                type={showPassword ? 'text' : 'password'} 
                id="password" 
                className="form-input" 
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button 
                type="button" 
                className="password-toggle"
                onClick={togglePasswordVisibility}
              >
                <i className={showPassword ? 'far fa-eye-slash' : 'far fa-eye'}></i>
              </button>
            </div>
            
            <div className="auth-actions">
              <button type="submit" className="auth-button">
                <i className="fas fa-sign-in-alt"></i> Sign In
              </button>
            </div>
            
            <div className="auth-links">
              <button type="button" className="auth-link">
                <i className="fas fa-key"></i> Forgot password?
              </button>
              <button type="button" className="auth-link">
                <i className="fas fa-question-circle"></i> Need help?
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <div style={{
        position: 'fixed',
        bottom: '20px',
        left: '0',
        right: '0',
        textAlign: 'center',
        fontSize: '0.875rem',
        color: '#ffffff'
      }}>
        © 2025 All Rights Reserved @ Infocom IT Solutions Pte Ltd
      </div>
    </div>
  );
};

export default Login;
