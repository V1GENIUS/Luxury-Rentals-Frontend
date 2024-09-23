import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import React, { useState } from 'react';
import Villas from './Pages/Villas';
import Navbar from './Components/Navbar';
import Contact from './Pages/Contact';
import TermCondition from './Pages/TermCondition';
import AboutUs from './Pages/AboutUs';
import Homepage from './Pages/Homepage';
import VillaView from './Pages/VillaView';
import VillaFilter from './Pages/VillaFilter';
import Signup from './Components/Signup';
import Login from './Components/Login';
import GetUser from './Components/GetUser';
import GetAllUsers from './Components/GetAllUsers';


function App() {
  const [token, setToken] = useState(null);
  return (
    <>
    {/* <Router>
      <Navbar /> 
      <h1>User Management App</h1> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        {token && (
          <>
            <Route path="/getUser" element={<GetUser token={token} />} />
            <Route path="/getAllUsers" element={<GetAllUsers token={token} />} />
          </>
        )}

        <Route path="/villas" element={<Villas />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/termCondition" element={<TermCondition />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/villa-view" element={<VillaView />} />
        <Route path="/villaFilter" element={<VillaFilter />} />
      </Routes>
    {/* </Router> */}
    </>
  );
}

export default App;
