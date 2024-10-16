import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import heart from '../Images/heart.png';
import icon6 from '../Images/users.png';
import icon7 from '../Images/bed.png';
import icon8 from '../Images/blueprint.png';
import icon9 from '../Images/bathtub.png';

function Card() {
  const [villas, setVillas] = useState([]); // State to store villa data
  const navigate = useNavigate();

  // Fetch villa data from the backend
  useEffect(() => {
    const fetchVillas = async () => {
      try {
        const response = await axios.get('http://localhost:4000/villas'); // Replace with your actual API endpoint
        setVillas(response.data); // Assuming the data is an array of villas
      } catch (error) {
        console.error('Error fetching villa data:', error);
      }
    };

    fetchVillas();
  }, []);

  const handleCardClick = (villa) => {
    navigate('/villa-view', { state: { villa } });
  };

  return (
    <>
      {villas.length > 0 ? (
        villas.map((villa, index) => {
          return (
            <div key={index} onClick={() => handleCardClick(villa)}>
              <div className='card'>
                <img style={{width:'302px' , height:'266px'}}
                  className='imgvilla'
                  src={`${villa.Imageview}`} 
                  alt="homepage"
                  width="302"
                  height="266"
                />
                <div className='pricebox'>
                  <text className='price'>
                    From <b> € {villa.price} / daily</b>
                  </text>
                  <img
                    className='heart'src={heart} alt="homepage"
                    width="40"
                    height="40"
                  />
                </div>

                <div
                  className='white_box'
                  style={{
                    backgroundColor: 'white',
                    marginTop: '-55px',
                    borderRadius: '10px',}}>
                  <div>
                    <div className='location_2'>
                      <h4 style={{ marginTop: '20px' }}>{villa.location}</h4>
                      <li style={{ marginInlineStart: '10px', marginTop: '20px' }}>
                        {villa.place}
                      </li>
                    </div>
                    <div>
                      <h1 style={{ marginInlineStart: '20px', marginTop: '0px' }}>
                        {villa.Villaname}
                      </h1>
                    </div>
                  </div>
                  <div className='card_des_box'>
                    <div className='card_des_2'>
                      <img
                        className='icon1'
                        src={icon6}
                        alt="homepage"
                        width="20"
                        height="20"
                      />
                      <text style={{ marginInlineStart: '5px' }}>
                        <b>{villa.guest}</b> guest{' '}
                      </text>
                    </div>
                    <div className='card_des_2'>
                      <img
                        className='icon1'
                        src={icon7}
                        alt="homepage"
                        width="20"
                        height="20"
                      />
                      <text style={{ marginInlineStart: '5px' }}>
                        <b>{villa.bedrooms}</b> bedrooms{' '}
                      </text>
                    </div>
                  </div>
                  <div className='card_des_box'>
                    <div className='card_des_2'>
                      <img
                        className='icon1'
                        src={icon8}
                        alt="homepage"
                        width="20"
                        height="20"
                      />
                      <text style={{ marginInlineStart: '5px' }}>
                        <b>{villa.area}</b> m<sup>2</sup>{' '}
                      </text>
                    </div>
                    <div className='card_des_2'>
                      <img
                        className='icon1'
                        src={icon9}
                        alt="homepage"
                        width="20"
                        height="20"
                      />
                      <text style={{ marginInlineStart: '5px' }}>
                        <b>{villa.bathrooms}</b> bathrooms{' '}
                      </text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>No villas available. Please add some villas.</p>
      )}
    </>
  );
}

export default Card;