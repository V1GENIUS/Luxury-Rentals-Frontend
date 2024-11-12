import React, { useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/Signup.css'

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


    async function handleSignup(e) {
      e.preventDefault();
      try {

        let response = await fetch('https://luxury-rental-backend.onrender.com/user/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            password
          }),
        });

        let result = await response.json();

        // Check if signup was successful
        if (response.status === 201) {
          console.log('Signup successful:', result);
          localStorage.setItem("user-info" ,JSON.stringify(result));
          alert('User signed up successfully');
          navigate('/login');
        } else {
          console.error('Signup failed:', result.message);
          alert('Signup failed: ' + result.message);
        }
      } catch (error) {
        console.error('Error during signup:', error);
        alert('Error during signup: ' + error.message);
      }
    };

    const handleRedirectToLogin = () => {
      navigate('/login'); // Redirects the user to the login page
    };
  

  return (
    <div className='signup'>
      <h2 style={{marginInlineStart:'14%' , color:'blue'}}>Signup</h2>
      <br/><br/>
      <form onSubmit={handleSignup}>
        <div >
          <input type="text" value={name} placeholder='Name' onChange={(e) => setName(e.target.value)} style={{width:'300px' , height:'30px' ,paddingInline:'10px' , borderRadius:'5px'}} />
        </div>
        <br/><br/>
        <div>
          <input type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)}style={{width:'300px' , height:'30px' ,paddingInline:'10px' , borderRadius:'5px' }}  />
        </div>
        <br/><br/>
        <div>
          <input type="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} style={{width:'300px' , height:'30px' ,paddingInline:'10px' , borderRadius:'5px'}}/>
        </div>
        <br/><br/>
        <button onClick={handleSignup} style={{marginInlineStart:'14.5%' , backgroundColor:'blue' , border:'transparent', width:'70px' ,height:'40px' , borderRadius:'10px' , color:'white'  , cursor:'pointer' }} type="submit">Signup</button>
        <br/><br/>
        <span>
          if user is already exist then ? click here
          <button  onClick={handleRedirectToLogin} style={{background:'transparent' , border:'transparent' , color:'blue'  , cursor:'pointer', fontSize:'15px'}}>
            Login
          </button>
        </span>
      </form>
    </div>
  );
}

export default Signup;
