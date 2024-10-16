// // Success.js

// import React from 'react';
// import { useLocation } from 'react-router-dom';

// function Success() {
//     const location = useLocation();
//     const query = new URLSearchParams(location.search);
//     const sessionId = query.get('session_id');

    
//     return (
//         <>
//         <div style={{textAlign:'center' , alignItems:'center'}} >
//             <h1>Payment Successful!</h1>
//             <h3>this is your trasaction id </h3>
//             <h4>{sessionId}</h4>

//             <p>Thank you for your purchase. Your payment has been processed successfully.</p>
//         </div>
//         </>
        
//     );
// }

// export default Success;

import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Success() {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const sessionId = query.get('session_id');
    const navigate = useNavigate();

    useEffect(() => {
        
        const timer = setTimeout(() => {
            alert('Your villa is booked!'); 
            navigate(-1);
            
        }, 3000); 

       
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div style={{textAlign:'center' , alignItems:'center'}}>
            <h1>Payment Successful!</h1>
            <h3>this is your Session id </h3>
            <h4>{sessionId}</h4>
            <p>Thank you for your purchase. Your payment has been processed successfully.</p>
            <p>You will be redirected to the villa page shortly...</p>
            <h1>wait for 3 seconds</h1>
        </div>
    );
}

export default Success;

