// // admin/pages/LoginPage.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const LoginPage = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = (e) => {
//         e.preventDefault();
//         // Check credentials (you should replace this with your actual authentication logic)
//         if (username === 'admin' && password === 'password') { // Replace with API call
//             navigate('/dashboard'); // Redirect to dashboard on success
//         } else {
//             alert('Invalid credentials');
//         }
//     };

//     return (
//         <div className="login-container">
//             <h2>Admin Login</h2>
//             <form onSubmit={handleLogin}>
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default LoginPage;


//admin/pages/LoginPage.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../AuthContext'; // Import the useAuth hook

// const LoginPage = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();
//     const { login } = useAuth(); // Get the login function from AuthContext

//     const handleLogin = (e) => {
//         e.preventDefault();
//         // Check credentials (you should replace this with your actual authentication logic)
//         if (username === 'admin' && password === 'password') { // Replace with API call
//             login(); // Call login function
//             navigate('/dashboard'); // Redirect to dashboard on success
//         } else {
//             alert('Invalid credentials');
//         }
//     };

//     return (
//         <div className="login-container">
//             <h2>Admin Login</h2>
//             <form onSubmit={handleLogin}>
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default LoginPage;











// admin/pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Import the useAuth hook

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
            navigate('/dashboard'); // Redirect to dashboard on success
        } else {
            console.log('Invalid credentials');
            alert('Invalid credentials');
        }
    };

    return (
        <div className="login-container">
            <h2>Admin Login</h2>
            <form onSubmit={handleLogin}>
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



