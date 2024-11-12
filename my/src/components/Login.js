import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext'; // Ensure AuthContext is correctly imported
import './Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { setAuthData } = useContext(AuthContext); // Pull setAuthData from AuthContext
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isLogin && password !== confirmPassword) {
      alert("Passwords don't match!");
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

        // Update AuthContext with user data and token
        setAuthData({ token: data.token, user: data.user });

        alert(isLogin ? 'Login successful!' : 'Registration successful!');
        
        // Redirect to home page
        navigate('/');
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Error during login/registration.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div id="login" className="login-section">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <label>Name:</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Phone:</label>
            <input
              type="text"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </>
        )}
        <label>Email:</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!isLogin && (
          <>
            <label>Confirm Password:</label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </>
        )}
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <p>
        {isLogin ? "Don't have an account?" : 'Already have an account?'}
        <span onClick={() => setIsLogin(!isLogin)} className="toggle-link">
          {isLogin ? ' Sign Up' : ' Login'}
        </span>
      </p>
    </div>
  );
};

export default Login;
