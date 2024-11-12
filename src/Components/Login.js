import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/Signup.css'

function Login({ setToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      // Fetch API to call the backend login endpoint
      let response = await fetch('https://luxury-rental-backend.onrender.com/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      let data = await response.json();

      // Check if the token is returned
      if (response.ok && data.token) {
        // Save the token in localStorage
        localStorage.setItem('token', data.token);

        if (setToken) {
          setToken(data.token); // If you are using token in state
        }

        // Redirect to the home page
        navigate('/');
      } else {
        alert('Login failed: ' + data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Error during login: ' + error.message);
    }
  }

  const handleRedirectToSignup = () => {
    navigate('/Signup'); // Redirects the user to the login page
  };

  return (
    <div className='signup'>
      <h2 style={{marginInlineStart:'14%' , color:'blue'}}>Login</h2>
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
          if user is not signed then ? click here
          <button  onClick={handleRedirectToSignup} style={{background:'transparent' , border:'transparent' , color:'blue' , cursor:'pointer', fontSize:'15px'}}>
            Register
          </button>
        </span>
      </form>
    </div>
  );
}

export default Login;
