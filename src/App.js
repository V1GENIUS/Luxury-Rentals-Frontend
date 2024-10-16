import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import React, { useState , Navigate } from 'react';

import Villas from './Pages/Villas';
import Contact from './Pages/Contact';
import TermCondition from './Pages/TermCondition';
import AboutUs from './Pages/AboutUs';
import ScrollToTop from './Components/ScrollToTop'; 
import Homepage from './Pages/Homepage';
import VillaView from './Pages/VillaView';
import Signup from './Components/Signup';
import Login from './Components/Login';
import GetUser from './Components/GetUser';
import GetAllUsers from './Components/GetAllUsers';
import AdminLogin from './Components/Admin pannel/AdminLogin';
import AdminPanel from './Components/Admin pannel/AdminPannel';
import CreateVilla from './Components/Admin pannel/CreateVilla';
import EditVilla from './Components/Admin pannel/EditVilla';
import Success from './Components/PaymentPage/Success';
import Cancel from './Components/PaymentPage/Cancel';
import ProtectRoute from './Components/Admin pannel/ProtectRoute';
function App() {
  //const [token, setToken] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('login'));
  return (
    <>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/admin/login" element={< AdminLogin  setToken={setToken} />} />
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

        <Route path="/admin" element={<ProtectRoute setToken={setToken} />}>
                <Route path="" element={<AdminPanel setToken={setToken} />} />
                <Route path="create-villa" element={<CreateVilla />} />
                <Route path="edit-villa/:id" element={<EditVilla />} />
            </Route>
        {/* admin pannel components */}
        {/* <Route path="/admin" element={<ProtectRoute />} >
         <Route path="admin" element={<  AdminPanel setToken={setToken} />} />
         <Route path="create-villa" element={<CreateVilla />} />
          <Route path="edit-villa/:id" element={<EditVilla />} />
         </Route> */}
        {/* <Route path="/admin" element={<AdminPanel />}>
          
        </Route> */}

        {/* PaymentPages  */}
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        


      </Routes>
    {/* </Router> */}
    </>
  );
}

export default App;
