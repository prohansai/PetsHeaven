// admin/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

// admin/components/PrivateRoute.js
const PrivateRoute = ({ component: Component }) => {
    const { isAuthenticated } = useAuth();
    console.log('PrivateRoute isAuthenticated:', isAuthenticated);
    
    return isAuthenticated ? <Component /> : <Navigate to="/" />;
};


export default PrivateRoute;





// ***
// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../AuthContext';

// const PrivateRoute = ({ component: Component, requiredRole }) => {
//     const { isAuthenticated, role } = useAuth();

//     return isAuthenticated && role === requiredRole ? (
//         <Component />
//     ) : (
//         <Navigate to="/" />
//     );
// };

// export default PrivateRoute;
