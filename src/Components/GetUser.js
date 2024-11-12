import React, { useState } from 'react';
import axios from 'axios';

function GetUser({ token }) {
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState('');

    const getUser = async () => {
        try {
            const response = await axios.get('https://luxury-rental-backend.onrender.com/user/getUser', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setUser(response.data);
        } catch (error) {
            setMessage('Failed to fetch user data');
        }
    };

    return (
        <div>
            <h2>Get User Data</h2>
            <button onClick={getUser}>Get User</button>
            {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
            {message && <p>{message}</p>}
        </div>
    );
}

export default GetUser;
