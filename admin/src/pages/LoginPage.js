// admin/pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Import the useAuth hook
import { toast } from 'react-toastify';
import './LoginPage.css'

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth(); // Get the login function from AuthContext

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Attempting to log in with:', username, password);
        // Check credentials (you should replace this with your actual authentication logic)
        if (username === 'admin' && password === 'password') { // Replace with API call
            console.log('Valid credentials, logging in...');
            login(); // Call login function
            navigate('/dashboard');// Redirect to dashboard on success
            toast.success("login successful") 
        } else {
            console.log('Invalid credentials');
            toast.error('Invalid credentials');
        }
    };

    return (
        <div className="login-container">
            
            <form className='forma' onSubmit={handleLogin}>
            <h2>Admin Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;




