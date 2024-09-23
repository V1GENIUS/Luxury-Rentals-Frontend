import React from 'react';
import { useNavigate } from 'react-router-dom';
import heart from '../Images/heart.png';
import icon6 from '../Images/users.png'
import icon7 from '../Images/bed.png'
import icon8 from '../Images/blueprint.png'
import icon9 from '../Images/bathtub.png'
import image1villa from '../Images/image1villa.png';
import image2villa from '../Images/image2villa.png';
import image3villa  from '../Images/image3villa.png'
import image4villa  from '../Images/image4villa.png'
import image5villa  from '../Images/image5villa.png'
import image6villa  from '../Images/image6villa.png'
import image7villa  from '../Images/image7villa.png'
import image8villa  from '../Images/image8villa.png'
import image9villa  from '../Images/image9villa.png'




function Card() {
  const navigate = useNavigate();

  const Villas = [
    {
      Villaname: 'Villa Luna',
      price: '240',
      location: 'Greece',
      place: 'Seaside',
      Imageview: image1villa,
      guest: '11',
      bedrooms: '6',
      area: '120',
      bathrooms: '25',
    },
  
  {
    Villaname: 'Villa Tosco',
    Imageview:image2villa,
    price:'350',
    location :'Italy',
    place : 'Moutains',
    guest :'8',
    bedrooms : '8',
    area : '460' ,
    bathrooms : '4'
  },
  {
    Villaname: 'Aphrodite',
    Imageview: image3villa,
    price:'260',
    location :'Greece',
    place : 'Seaside',
    guest :'12',
    bedrooms : '6',
    area : '460' ,
    bathrooms : '5'
  },
  {
    Villaname: 'Villa Makarska',
    Imageview: image4villa,
    price:'280',
    location :'Italy',
    place : 'Moutains',
    guest :'8',
    bedrooms : '8',
    area : '460' ,
    bathrooms : '4'
  },
  {
    Villaname: 'Villa Roxane',
    Imageview: image5villa,
    price:'110',
    location :'Greece',
    place : 'Seaside',
    guest :'11',
    bedrooms : '6',
    area : '120' ,
    bathrooms : '25'
  },
  {
    Villaname: 'Aphrodite',
    Imageview: image6villa,
    price:'240',
    location :'Greece',
    place : 'Seaside',
    guest :'12',
    bedrooms : '6',
    area : '460' ,
    bathrooms : '5'
  },
  {
    Villaname: 'Villa Sunset',
    Imageview: image7villa,
    price:'280',
    location :'Italy',
    place : 'Mountains',
    guest :'8',
    bedrooms : '8',
    area : '460' ,
    bathrooms : '4'
  },
  {
    Villaname: 'White Lady',
    Imageview: image8villa,
    price:'110',
    location :'Greece',
    place : 'Seaside',
    guest :'11',
    bedrooms : '6',
    area : '120' ,
    bathrooms : '25'
  },
  {
    Villaname: 'Thebes',
    Imageview: image9villa,
    price:'240',
    location :'Greece',
    place : 'Seaside',
    guest :'12',
    bedrooms : '6',
    area : '460' ,
    bathrooms : '5'
  },
] ;

  const handleCardClick = (villa) => {
    navigate('/villa-view', { state: { villa } });
  };

  return (
    <>
     {Villas.map((villa, index) => {     
      return (        
      <div key={index} onClick={() => handleCardClick(villa)}>
           

        <div  className='card'>
          <img className='imgvilla' src={villa.Imageview} alt="homepage" width="302" height="266" ></img>

          <div className='pricebox'>
            <text className='price'>From <b> € {villa.price} / daily</b></text>
          </div>

          <div className='pricebox'>
           <img className='heart' src={heart} alt="homepage" width="40" height="40" ></img>
          </div>
          
          <div className='white_box' style={{backgroundColor:'white' , marginTop:'-55px', borderRadius:'10px'}}>
            <div>
              <div className='location_2'>
                <h4 style={{marginTop:'20px'}}>
                  {villa.location}
                </h4>
                <li style={{marginInlineStart:'10px' ,marginTop:'20px'}}>
                  {villa.place}
                </li>
              </div>
              
              <div >
                <h1 style={{marginInlineStart:'20px' , marginTop:'0px'}}>
                  {villa.Villaname}
                </h1>
              </div>
            </div>

            <div className='card_des_box'>
              <div className='card_des_2'>
                <img className='icon1' src={icon6} alt="homepage" width="20" height="20" ></img>
                <text style={{marginInlineStart:'10px'}}><b>{villa.guest}</b> guest </text>
              </div>
              <div className='card_des_2'>
                <img className='icon1' src={icon7} alt="homepage" width="20" height="20" ></img>
                <text style={{marginInlineStart:'10px'}}><b>{villa.bedrooms}</b> bedrooms </text> 
              </div>                  
            </div >

            <div className='card_des_box'>
              <div className='card_des_2'>
                <img className='icon1' src={icon8} alt="homepage" width="20" height="20" ></img>
                <text style={{marginInlineStart:'10px'}}><b>{villa.area}</b> m<sup>2</sup> </text>
              </div>
          
              <div className='card_des_2'>
                <img className='icon1' src={icon9} alt="homepage" width="20" height="20" ></img>
                <text style={{marginInlineStart:'10px'}}><b>{villa.bathrooms}</b> bathrooms </text>
              </div>
            </div>
          </div>
        </div> 
      </div>

)})}
      
     

    </>
  );
}

export default Card;