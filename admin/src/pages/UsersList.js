// UsersList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import './UsersList.css'
import { toast } from 'react-toastify';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the backend
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    
    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${userId}`);
      setUsers(users.filter(user => user._id !== userId)); // Remove the deleted user from the state
      toast.success("user deleted successfully")
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error("Error in deleting user")
    }
  };

  return (
    <div className="users-list-container">
      <Navbar />
      <h2 >Users List</h2>
      <div className="users-card-container">
        {users.length === 0 ? (
          <p>No users found</p>
        ) : (
          users.map(user => (
            <div key={user._id} className="user-card">
              <h3 className="user-name">{user.name}</h3>
              <p className="user-email">{user.email}</p>
              <button className="delete-btn" onClick={() => handleDeleteUser(user._id)}>Delete User</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UsersList;
