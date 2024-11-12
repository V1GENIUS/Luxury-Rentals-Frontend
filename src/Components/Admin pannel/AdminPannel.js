
import React, { useEffect, useState } from 'react';
import SidebarAdmin from './SidebarAdmin'; // Adjust the import path if necessary
import VillaList from './VillaList';
import axios from 'axios';
//import 'bootstrap/dist/bootstrap.css';
import { Outlet } from 'react-router-dom';
//import Navbar from './Navbar'; // Optional: if you have a Navbar component

function AdminPanel() {
  const [villas, setVillas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch all villas on component mount
  useEffect(() => {
    const fetchVillas = async () => {
      try {
        const response = await axios.get('http://localhost:4000/villas');
        setVillas(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching villas:', err.response ? err.response.data : err.message);
        setError('Failed to fetch villas.');
        setLoading(false);
      }
    };

    fetchVillas();
  }, []);

  return (
    <div style={{display:'flex'}} >
      <SidebarAdmin />
      <div className="flex-grow-1">
        {/* Optional Navbar */}
        {/* <Navbar /> */}
        <div className="p-4">
          {/* Outlet to render nested routes */}
          <Outlet context={{ villas, setVillas }} />

          {/* Display Villa List */}
          {loading ? (
            <p>Loading villas...</p>
          ) : error ? (
            <p className="text-danger">{error}</p>
          ) : (
            <VillaList villas={villas} setVillas={setVillas} />
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
