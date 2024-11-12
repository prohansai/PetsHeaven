import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserSearch = ({ onSelectUser }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const trimmedSearchTerm = searchTerm.trim();
        console.log('Search term:', trimmedSearchTerm); // Trim the search term
        if (trimmedSearchTerm) {
            try {
                const response = await axios.get(`http://localhost:5000/api/users/search`, {
                    params: { name: trimmedSearchTerm },
                });
                console.log('Fetched users:', response.data); // Check the fetched data
                setUsers(response.data);
            } catch (error) {
                // Handle errors from Axios
                console.error('Error fetching users:', error.response ? error.response.data : error.message);
                setUsers([]); // Clear users on error
            }
        } else {
            setUsers([]); // Clear users if the search term is empty
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [searchTerm]);

    return (
        <div>
            <input
                type="text"
                placeholder="Search for a user"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {users.length > 0 ? (
                <ul>
                    {users.map((user) => (
                        <li key={user._id} onClick={() => onSelectUser(user)}>
                            {user.name}
                        </li>
                    ))}
                </ul>
            ) : searchTerm && <p>No users found</p>}  {/* Show message when no users match the search */}
        </div>
    );
};

export default UserSearch;
