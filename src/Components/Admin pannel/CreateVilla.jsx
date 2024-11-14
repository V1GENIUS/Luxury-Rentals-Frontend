import React, { useState } from 'react';
import SidebarAdmin from './SidebarAdmin';
import { useNavigate, useOutletContext } from 'react-router-dom';
import axios from 'axios';



function CreateVillas() {
  const navigate = useNavigate();
  const { setVillas } = useOutletContext([]); 
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
  const [previewImage, setPreviewImage] = useState(null);
  const [formMessage, setFormMessage] = useState('');
  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVillaData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Image Change with Validation and Preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a FileReader instance to read the image
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          if (img.width >= 300 && img.height >= 200) {
            setVillaData((prev) => ({ ...prev, Imageview: file }));
            setImageError('');
            setPreviewImage(event.target.result); // Set the preview image
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

  // Handle Add Villa
  const handleAddVilla = async (e) => {
    e.preventDefault();

    // Ensure image is valid before proceeding
    if (!villaData.Imageview) {
      setImageError('Please upload a valid image.');
      return;
    }

    // Prepare form data for submission
    const formData = new FormData();
    for (const key in villaData) {
      formData.append(key, villaData[key]);
    }

    try {
      const response = await axios.post('https://luxury-rental-backend.onrender.com/villas/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('API Response:', response); 

      if (response.status === 201) {
        const newVilla = response.data;
        setVillas((prevVillas) => [...prevVillas, newVilla]); 
        resetVillaData();
        alert('Villa added successfully!');

        navigate('/admin');
      } else {
        setFormMessage(`Error adding villa: ${response.data.message}`);
        alert(`Error adding villa: ${response.data.message}`);
      }
    } catch (error) {
      console.error('Error adding villa:', error.response ? error.response.data : error.message);
      setFormMessage('An error occurred while adding the villa.');
      alert('An error occurred while adding the villa.');
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
  <>
    <div style={{display:'flex'}}>
      <SidebarAdmin />
      <div style={{ backgroundColor: 'grey', width:'1120px' }}>
        <h1 style={{marginLeft:'440px', color:'white', paddingTop:'20px'}}>Create a New Villa</h1>
        <form onSubmit={handleAddVilla} encType="multipart/form-data" className="mt-4">
          <div className="form-group">
            <label ><b>Villa Name:</b></label>
            <input
              type="text"
              name="Villaname"
              className="form_control"
              value={villaData.Villaname}
              onChange={handleChange}
              placeholder="Villa Name"
              required
            />
          </div>
          <div className="form-group">
            <label ><b>Price (€):</b></label>
            <input
              type="number"
              name="price"
              className="form_control"
              value={villaData.price}
              onChange={handleChange}
              placeholder="Enter Price"
              required
            />
          </div>
          <div className="form-group">
            <label ><b>Location:</b></label>
            <input
              type="text"
              name="location"
              className="form_control"
              value={villaData.location}
              onChange={handleChange}
              placeholder="Enter Location"
              required
            />
          </div>

          <div className="form-group">
            <label ><b>Place:</b></label>
            <input
              type="text"
              name="place"
              className="form_control"
              value={villaData.place}
              onChange={handleChange}
              placeholder="Enter Place"
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
              placeholder="Enter Area in (m²)"
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
              placeholder="Enter Total Guests"
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
              placeholder="Enter total Bedrooms"
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
              placeholder="Enter Total Bathrooms"
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
              required
            />
            {imageError && <small className="form-text text-danger">{imageError}</small>}
            {previewImage && (
              <div className="mt-2">
                <img src={previewImage} alt="Preview" className="" style={{ width: '500px', height: '400px', objectFit: 'cover' }}  />
              </div>
            )}
          </div>
          <button type="submit" className='Add_btn' >
            Add Villa
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
    </>
  );
}

export default CreateVillas;
