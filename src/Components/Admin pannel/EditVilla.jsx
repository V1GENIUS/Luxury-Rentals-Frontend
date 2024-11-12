import React, { useState, useEffect } from 'react';
import SidebarAdmin from '../Admin pannel/SidebarAdmin';
import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import axios from 'axios';

function EditVilla() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setVillas } = useOutletContext(); 
  const [villaData, setVillaData] = useState({
    Villaname: '',
    price: '',
    location: '',
    place: '',
    Imageview: null,
    guest: '',
    bedrooms: '',
    area: '',
    bathrooms: '',
  });
  const [imageError, setImageError] = useState('');
  const [previewImage, setPreviewImage] = useState(null); // For image preview
  const [currentImage, setCurrentImage] = useState('');
  const [formMessage, setFormMessage] = useState(''); // For success/error messages


  // Fetch villa data on component mount
  useEffect(() => {
    const fetchVilla = async () => {
      try {
        const response = await axios.get(`https://luxury-rental-backend.onrender.com/villas/${id}`);
        setVillaData({
          Villaname: response.data.Villaname,
          price: response.data.price,
          location: response.data.location,
          place: response.data.place,
          Imageview: null, // Handle image upload separately
          guest: response.data.guest,
          bedrooms: response.data.bedrooms,
          area: response.data.area,
          bathrooms: response.data.bathrooms,
        });
        setCurrentImage(response.data.Imageview);
      } catch (error) {
        console.error('Error fetching villa data:', error.response ? error.response.data : error.message);
        alert('Failed to fetch villa data.');
      }
    };

    fetchVilla();
  }, [id]);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVillaData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Image Change with Validation and Preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          if (img.width >= 300 && img.height >= 200) {
            setVillaData((prev) => ({ ...prev, Imageview: file }));
            setImageError('');
            setPreviewImage(event.target.result); 
          } else {
            setImageError('Image must be at least 300x200 pixels.');
            setVillaData((prev) => ({ ...prev, Imageview: null }));
            setPreviewImage(null);
          }
        };
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Update Villa
  const handleUpdateVilla = async (e) => {
    e.preventDefault();

    // Prepare form data for submission
    const formData = new FormData();
    for (const key in villaData) {
      formData.append(key, villaData[key]);
    }
    if (villaData.Imageview) {
      formData.append('Imageview', villaData.Imageview);
    }

    try {
      const response = await axios.put(`https://luxury-rental-backend.onrender.com/villas/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log('API Response:', response); // Detailed logging

      if (response.status === 200) {
        const updatedVilla = response.data;
        setVillas((prevVillas) => prevVillas.map(villa => (villa._id === id ? updatedVilla : villa)));
        resetVillaData();
        setFormMessage('Villa updated successfully!');
        alert('Villa updated successfully!');
        navigate('/admin');
      } else {
        setFormMessage(`Error updating villa: ${response.data.message}`);
        alert(`Error updating villa: ${response.data.message}`);
      }
    } catch (error) {
      
      console.error('Error updating villa:', error.response ? error.response.data : error.message);
      setFormMessage('An error occurred while updating the villa.');
      alert('An error occurred while updating the villa.');
    }
  };
  
  // Reset form fields
  const resetVillaData = () => {
    setVillaData({
      Villaname: '',
      price: '',
      location: '',
      place: '',
      Imageview: null,
      guest: '',
      bedrooms: '',
      area: '',
      bathrooms: '',
    });
    setImageError('');
    setPreviewImage(null);
    setFormMessage('');
  };

  return (
    <div style={{display:'flex'}}>
      <SidebarAdmin />
      <div  style={{ backgroundColor: 'grey', width:'1120px' }}>
        <h2 style={{marginLeft:'500px', color:'white', paddingTop:'20px'}}>Edit Villa</h2>
        <form onSubmit={handleUpdateVilla} encType="multipart/form-data" className="mt-4">
          <div className="form-group">
            <label><b>Villa Name:</b></label>
            <input
              type="text"
              name="Villaname"
              className="form_control"
              value={villaData.Villaname}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label><b>Price (€):</b></label>
            <input
              type="number"
              name="price"
              className="form_control"
              value={villaData.price}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label><b>Location:</b></label>
            <input
              type="text"
              name="location"
              className="form_control"
              value={villaData.location}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label><b>Place:</b></label>
            <input
              type="text"
              name="place"
              className="form_control"
              value={villaData.place}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label><b>Guests:</b></label>
            <input
              type="number"
              name="guest"
              className="form_control"
              value={villaData.guest}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label><b>Bedrooms:</b></label>
            <input
              type="number"
              name="bedrooms"
              className="form_control"
              value={villaData.bedrooms}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label><b>Area (m²):</b></label>
            <input
              type="number"
              name="area"
              className="form_control"
              value={villaData.area}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label><b>Bathrooms:</b></label>
            <input
              type="number"
              name="bathrooms"
              className="form_control"
              value={villaData.bathrooms}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label><b>Villa Image (Min 300x200 px):</b></label>
            <input
              type="file"
              name="Imageview"
              className="form_control"
              accept="image/*"
              onChange={handleImageChange}
            />
            {imageError && <small className="form-text text-danger">{imageError}</small>}
            {previewImage ? (
              <div className="mt-2">
                <img src={previewImage} alt="Preview" height='400' width='600'  />
              </div>
            ) : (
              currentImage && (
                <div className="">
                  <img src={currentImage} alt="Current" height='400' width='600' />
                </div>
              )
            )}
          </div>

          <button type="submit" className='Add_btn'>
            Update Villa
          </button>
          <button type="button" className='Add_btn' onClick={resetVillaData}>
            Cancel
          </button>
          
          {formMessage && (
            <p style={{ color: formMessage.includes('successfully') ? 'green' : 'red', marginTop: '10px' }}>
              {formMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default EditVilla;
