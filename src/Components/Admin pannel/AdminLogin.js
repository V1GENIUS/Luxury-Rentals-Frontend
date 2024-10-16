import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin({ setToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    

    try {
      const response = await fetch('http://localhost:4000/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        setToken(data.token); // Assuming the API returns a token
        navigate('/admin');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleRedirectToSignup = () => {
    navigate('/Signup'); // Redirects the user to the login page
  };

  return (
    <>
    
     <div className='signup'>
     <h2 style={{marginInlineStart:'10%' , color:'blue'}}>Admin Login</h2>
     <br/><br/>
     <form onSubmit={handleLogin}>
       <div>
         <input type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} style={{width:'300px' , height:'30px' ,paddingInline:'10px' , borderRadius:'5px' }}  />
       </div>
       <br/><br/>
       <div>
         <input type="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} style={{width:'300px' , height:'30px' ,paddingInline:'10px' , borderRadius:'5px'}}/>
       </div>
       <br/><br/>
       <button style={{marginInlineStart:'14.5%' , backgroundColor:'blue' , border:'transparent', width:'70px' ,height:'40px' , borderRadius:'10px' , color:'white' , cursor:'pointer'  }} type="submit">Login</button>
       <br/><br/>
       <span>
         if you are not Admin please signup As
         <button  onClick={handleRedirectToSignup} style={{background:'transparent' , border:'transparent' , color:'blue' , cursor:'pointer', fontSize:'15px'}}>
          User
         </button>
       </span>
     </form>
   </div>

   </>
  );
}

export default AdminLogin;
