import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext'; 
import './Login.css';
import { toast } from 'react-toastify';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { setAuthData } = useContext(AuthContext); 
  const navigate = useNavigate();

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    if (/^\d{0,10}$/.test(input)) {
      setPhone(input);
    }
  };

  const isStrongPassword = (password) => {
    const strongPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return strongPasswordRegex.test(password);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isLogin && password !== confirmPassword) {
      toast.error("Passwords don't match!");
      return;
    }

    if (!isLogin && phone.length !== 10) {
      toast.error('Phone number must be exactly 10 digits.');
      return;
    }

    if (!isLogin && !isStrongPassword(password)) {
      toast.error('Password must contain letters, digits, special characters, and be at least 6 characters long.');
      return;
    }

    const user = isLogin 
      ? { email, password } 
      : { name, phone, email, password };

    const endpoint = isLogin ? 'login' : 'register';

    try {
      const response = await fetch(`http://localhost:5000/api/users/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const data = await response.json();
        setAuthData({ token: data.token, user: data.user });
        toast.success(isLogin ? 'Login successful!' : 'Registration successful!');
        navigate('/');
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || 'Error during login/registration.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <div id="login" className="login-section">
      <div className="login-container">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input
                  id="phone"
                  type="text"
                  required
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="Enter your phone number"
                />
              </div>
            </>
          )}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            {!isLogin && (
              <div className="password-strength">
                {password && (
                  <span className={isStrongPassword(password) ? 'strong' : 'weak'}>
                    {isStrongPassword(password) ? 'Strong password' : 'Weak password'}
                  </span>
                )}
              </div>
            )}
          </div>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                id="confirmPassword"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
              />
            </div>
          )}
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <span onClick={() => setIsLogin(!isLogin)} className="toggle-link">
            {isLogin ? ' Sign Up' : ' Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
