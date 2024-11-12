import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './AdminPannel.css';

const VillaList = ({ villas, setVillas }) => {
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this villa?')) return;

    try {
      await axios.delete(`http://localhost:4000/villas/${id}`);
      setVillas(villas.filter((villa) => villa._id !== id));
      alert('Villa deleted successfully.');
    } catch (error) {
      console.error('Error deleting villa:', error.response ? error.response.data : error.message);
      alert('An error occurred while deleting the villa.');
    }
  };

  return (
    <div style={{marginInlineStart:'30px'}}>
      <h1 style={{marginInlineStart:'400px'}}>Existing Villas</h1>
      {villas.length > 0 ? (
        <div className="">
          <table className="table">
            <thead style={{padding:'30px'}}>
              <tr style={{marginInlineStart:'30px', fontSize:'20px' ,}}>
                <th>Villa Name</th>
                <th>Price (€)</th>
                <th>Location</th>
                <th>Area (m²)</th>
                <th>Image</th>
                <th>Guests</th>
                <th>Bedrooms</th>
                <th>Bathrooms</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody >
              {villas.map((villa) => (
                <tr style={{textAlign:'center', fontSize:'17px'}} key={villa._id}>
                  <td style={{ width: '150px', height: 'auto' }}><b>{villa.Villaname}</b></td>
                  <td>{villa.price}</td>
                  <td>{villa.location}</td>
                  <td>{villa.area}</td>
                  <td>
                  <img
                      src={`${villa.Imageview}`}
                      alt={villa.Villaname}
                      style={{ width: '170px', height: 'auto' }} 
                    />
                  </td>
                  <td>{villa.guest}</td>
                  <td>{villa.bedrooms}</td>
                  <td>{villa.bathrooms}</td>
                  <td style={{display:'grid', height:'160px'}}>
                    <Link  to={`/admin/edit-villa/${villa._id}`} className="edit_btn"  >
                     <b> Update</b>
                    </Link>
                    <button onClick={() => handleDelete(villa._id)} className="delete_btn">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No villas available. Please add some villas.</p>
      )}
    </div>
  );
};

export default VillaList;
