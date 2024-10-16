// import React, { useEffect } from 'react';
// import { Outlet, useNavigate , Navigate } from 'react-router-dom';

// function ProtectRoute({ Component }) {
//     const navigate = useNavigate();

//     const token = localStorage.getItem('token'); // assuming token is stored in localStorage

//     if (!token) {
//         return <Navigate to='/admin/login' />; // redirect to login if no token
//     }

//     return <Outlet />; 

//     //return <Outlet/>;
//     // let login = false ;
//     // if(login){
//     //     return <Outlet/> ;
//     // }else {
//     //     return  ;
//     // }
// }

// export default ProtectRoute;
import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

function ProtectRoute({ setToken }) {
    const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
    const [villas, setVillas] = useState([]);

    useEffect(() => {
        // Add any token validation logic if needed
    }, []);

    // If the token is not present, redirect to login
    if (!token) {
        return <Navigate to='/admin/login' />;
    }

    // Pass 'villas' and 'setVillas' as context using Outlet
    return <Outlet context={{ villas, setVillas }} />;
}

export default ProtectRoute;
