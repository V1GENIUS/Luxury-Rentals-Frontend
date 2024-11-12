
import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

function ProtectRoute({ setToken }) {
    const token = localStorage.getItem('token'); 
    const [villas, setVillas] = useState([]);

    useEffect(() => {
    }, []);

    if (!token) {
        return <Navigate to='/admin/login' />;
    }
    return <Outlet context={{ villas, setVillas }} />;
}

export default ProtectRoute;
