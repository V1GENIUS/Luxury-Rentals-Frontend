import React, { useState } from 'react';
import axios from 'axios';

function GetAllUsers({ token }) {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');

    const getAllUsers = async () => {
        try {
            const response = await axios.get('https://luxury-rental-backend.onrender.com/user/getAllUsers', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setUsers(response.data);
        } catch (error) {
            setMessage('Failed to fetch users');
        }
    };

    return (
        <div>
            <h2>Get All Users</h2>
            <button onClick={getAllUsers}>Get All Users</button>
            {users.length > 0 && <pre>{JSON.stringify(users, null, 2)}</pre>}
            {message && <p>{message}</p>}
        </div>
    );
}

export default GetAllUsers;
