import React, { useState    } from 'react';
import { useLocation , Outlet  } from 'react-router-dom'; 
import './VillaView.css';


import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Calendar from 'react-calendar';
import map from '../Images/map.png'
import img1gallary from '../Images/img1gallary.png'
import img2gallary from '../Images/img2gallary.png'
import img3gallary from '../Images/img3gallary.png'
import img4gallary from '../Images/img4gallary.png'
import iconlike from '../Images/heart.png'
import iconShare from '../Icons/share (1).png'
import icon1 from '../Icons/swimming-pool.png'
import icon2 from '../Icons/springboard.png'
import icon3 from '../Icons/hot-tub.png'
import icon4 from '../Icons/wifi.png'
import icon5 from '../Icons/fence.png'
import icon6 from '../Icons/ping-pong.png'
import icon7 from '../Icons/mooring (1).png'
import icon8 from '../Icons/electric-car.png'
import icon9 from '../Icons/playground.png'
import icon10 from '../Icons/game.png'
import icon11 from '../Icons/gym (1).png'
import icon12 from '../Icons/sauna.png'
import icon13 from '../Icons/computer.png'
import icon14 from '../Icons/bed (1).png'
import icon15 from '../Icons/baby-crib.png'
import icon16 from '../Icons/signage.png'
import icon17 from '../Icons/washing-machine.png'
import icon18 from '../Icons/terrace.png'
import icon19 from '../Icons/air-conditioner.png'
import icon20 from '../Icons/towel.png'
import icon21 from '../Icons/iron.png'
import icon22 from '../Icons/fireplace.png'
import icon23 from '../Icons/soap.png'
import icon24 from '../Icons/living-room.png'
import icon25 from '../Icons/hairdryer.png'
import icon26 from '../Icons/chair.png'
import icon27 from '../Icons/barbecue.png'
import icon28 from '../Icons/water-waves (1).png'
import icon29 from '../Icons/skyline.png'
import icon30 from '../Icons/shopping-cart-empty-side-view.png'
import icon31 from '../Icons/plane.png'
import icon32 from '../Icons/restaurant.png'
import icon33 from '../Icons/ambulance.png'
import icon34 from '../Icons/chair.png'
import icon35 from '../Icons/hospital-building.png'
import icon36 from '../Icons/plate.png'
import icon37 from '../Icons/kitchen.png'
import icon38 from '../Icons/mixer.png'
import icon39 from '../Icons/dishwasher.png'
import icon40 from '../Icons/coffee-machine.png'
import icon41 from '../Icons/oven.png'
import icon42 from '../Icons/phone-call (1).png'
import icon43 from '../Icons/email.png'
import icon44 from '../Icons/internet.png'
import icon45 from '../Icons/email (1).png'
import { loadStripe } from '@stripe/stripe-js';
import Villasbg from '../Images/villasbg.png';

function VillaView(props) {
  const villasbgimg = {
    backgroundImage: `url(${Villasbg})`,
    height: '100%',
    backgroundSize: 'cover',
  };
  const { state } = useLocation();
  const villa = state.villa; 
  const [date, setDate] = useState(null);
  // const [paymentMethod, setPaymentMethod] = useState('stripe');
    // const [paypalLoaded, setPaypalLoaded] = useState(false);
    
    // useEffect(() => {
    //   if (paymentMethod === 'paypal' && !paypalLoaded) {
      
    //     const script = document.createElement('script');
    //     script.src = "https://www.paypal.com/sdk/js?client-id=Af2STNtk04CHiNvitle3T3Re1tdVlPQeggU2hbl5-Wx6cQhd_JRpUbE0fDR_gxrSHdXMmDJy_1hET4EE";
    //     script.addEventListener('load', () => setPaypalLoaded(true));
    //     document.body.appendChild(script);
    //   }
    // }, [paymentMethod, paypalLoaded]);
 
  const stripePromise = loadStripe("pk_test_51Q5kKeSFABMAnpHQCwgdz997rYzRt7VpeY7d6oa9pIniTErioqXkRisMSAeVxUFLSgGzRdTqZshj1cIln7E9FNjx00VAwfu6ro");

  const apiURL = process.env.REACT_APP_API_URL || 'http://localhost:4000/api'; 
 
  const handleStripePayment = async () => {
    const stripe = await stripePromise;

    const body = {
        villa: villa,
        quantity: 1,
    };

    try {
        const response = await fetch(`${apiURL}/create-checkout-session`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Network response was not ok');
        }

        const session = await response.json();

        if (session.id) {
            const result = await stripe.redirectToCheckout({
                sessionId: session.id,
            });

            if (result.error) {
                console.error(result.error.message);
                alert(result.error.message);
            }
        } else {
            console.error('Not Find Any Session ID');
            alert('Checkout session Are Unsuccessfull');
        }
    } catch (error) {
        console.error('Error:', error);
        alert(`Error in payment processing ${error.message}`);
    }
}



return (
    <>
    <div className='Villaview'>
    {/* <div className="payment-page">
           
           <div>
               <label>
                   <input
                       type="radio"
                       name="paymentMethod"
                       value="stripe"
                       checked={paymentMethod === 'stripe'}
                       onChange={() => setPaymentMethod('stripe')}
                   />
                   Pay with Stripe
               </label>
               <label>
                   <input
                       type="radio"
                       name="paymentMethod"
                       value="paypal"
                       checked={paymentMethod === 'paypal'}
                       onChange={() => setPaymentMethod('paypal')}
                   />
                   Pay with PayPal
               </label>
           </div>

           {paymentMethod === 'stripe' && (
               <button onClick={handleStripePayment}>Pay with Stripe</button>
           )}

           {paymentMethod === 'paypal' && (
              //  <div id="paypal-button-container"></div>
              <button onClick={handlePayPalPayment}>Pay with Paypal</button>
           )}
       </div> */}
      <Navbar/>
      <div className='section_1'>
        <div className='villaname' >
          <h1 >{villa.Villaname}</h1>
          <div className='Villasave'>
            <div className='save'>
              <h4>save</h4>
              <img className='' src={iconlike} alt="homepage" width="20" height="20" style={{marginTop:'45px', marginInlineStart:'20px'}}/>
            </div>
          <div  className='save' >
            <h4>share</h4>
            <img className='' src={iconShare} alt="homepage" width="25" height="25"   style={{marginTop:'40px', marginInlineStart:'20px'}}/>
          </div>
          <div className='buy'>
            <div>
                 <button className='buy_btn' onClick={handleStripePayment}  >
                <b>Buy or Rent</b>
                </button>
             </div>
            </div>
          </div>
        </div>

          <div className='page1_content'>
            <div >
            <img className='main_img' src={villa.Imageview} alt="homepage" width="680" height="477" ></img>
            <div className='pricebox1'>
                <text className='price1'>From <b> € {villa.price} / daily</b></text>
              </div>
            </div>

            <div style={{display:'flex' , flexWrap:'wrap'}}>

              <img className='img_gallary1' src={img1gallary} alt="homepage" width="280" height="230"  ></img>
              <img className='img_gallary1' src={img2gallary} alt="homepage" width="280" height="230" ></img>
              <img className='img_gallary1' src={img3gallary} alt="homepage" width="280" height="230" style={{marginTop:'15px'}} ></img>
              <img className='img_gallary1' src={img4gallary} alt="homepage" width="280" height="230" style={{marginTop:'15px'}} ></img>

            </div>
          </div>
          

      </div>
{/* /////////////////////////////////////////////////////////////////////////////////// */}

      <div className='VillaPage2'>

        <div className='villa_facilty0'>
          <div>
            <div>
              <h2>DalMatia</h2>
              <h4>{villa.guest} guests / {villa.bedrooms} bedrooms /{villa.bathrooms} bathrooms / {villa.area}m2</h4>
            </div>
            <div style={{display:'flex'}}>
              <div style={{marginLeft:'0px'}}>
                <h2>Check In</h2>
                <h4>From 04:00 </h4>
              </div>
              <div style={{marginLeft:'20px'}}>
                <h2>Check Out</h2>
                <h4>Until 06:00</h4>
              </div>
            </div>            
            <div >
              <div>
                <h2>Amenities</h2>
              </div>
              <div className='facilty' style={{display:'flex' ,flexWrap:'wrap'}}>
                <div className='villa_facilty1'  >
                  <div>
                    <img className='icon' src={icon1} alt="homepage" width="25" height="25" />
                    <text >Swimming pool </text>            
                  </div>
                  <div>
                    <img className='icon' src={icon2} alt="homepage" width="25" height="25" />
                    Indoor pool            
                  </div>
                  <div>
                    <img className='icon' src={icon3} alt="homepage" width="25" height="25" />
                    Jacuzzi          
                  </div>
                  <div>
                    <img className='icon' src={icon4} alt="homepage" width="25" height="25" />
                    Wireless Internet          
                  </div>
                  <div>
                    <img className='icon' src={icon5} alt="homepage" width="25" height="25" />
                    Completely enclosed           
                  </div>
                  <div>
                    <img className='icon' src={icon6} alt="homepage" width="25" height="25" />
                    Table tennis          
                  </div>
                  <div>
                    <img className='icon' src={icon7} alt="homepage" width="25" height="25" />
                    Boat mooring       
                  </div>
                  <div>
                    <img className='icon' src={icon8} alt="homepage" width="25" height="25" />
                    Electric car charger         
                  </div>
                  <div>
                    <img className='icon' src={icon9} alt="homepage" width="25" height="25" />
                    Playground        
                  </div>

                </div>
              
                <div className='villa_facilty2'  >
                  <div   >
                    <img className='icon' src={icon10} alt="homepage" width="25" height="25" />
                   <text >Playstation</text>            
                  </div >
                  <div  >
                    <img className='icon' src={icon11} alt="homepage" width="25" height="25" />
                    Fitness/Gym            
                  </div>
                  <div  >
                    <img className='icon' src={icon12} alt="homepage" width="25" height="25" />
                    Sauna         
                  </div>
                  <div  >
                    <img className='icon' src={icon13} alt="homepage" width="25" height="25" />
                    Satellite / Cable           
                  </div>
                  <div  >
                    <img className='icon' src={icon14} alt="homepage" width="25" height="25" />
                    Ground floor bedroom           
                  </div>
                  <div  >
                    <img className='icon' src={icon15} alt="homepage" width="25" height="25" />
                    Feeding chair and baby cot        
                  </div>
                  <div  >
                    <img className='icon' src={icon16} alt="homepage" width="25" height="25" />
                    Private parking            
                  </div>
                  <div  >
                    <img className='icon' src={icon17} alt="homepage" width="25" height="25" />
                    Washing machine          
                  </div>
                  <div  >
                    <img className='icon' src={icon18} alt="homepage" width="25" height="25" />
                    Outdoor dining table            
                  </div>

                </div>

                <div className='villa_facilty3'  >
                  <div   >
                    <img className='icon' src={icon19} alt="homepage" width="25" height="25" />
                   <text >Air conditioning </text>            
                  </div >
                  <div  >
                    <img className='icon' src={icon20} alt="homepage" width="25" height="25" />
                    Towels provided            
                  </div>
                  <div  >
                    <img className='icon' src={icon21} alt="homepage" width="25" height="25" />
                    Iron & Board           
                  </div>
                  <div  >
                    <img className='icon' src={icon22} alt="homepage" width="25" height="25" />
                    Fireplace           
                  </div>
                  <div  >
                    <img className='icon' src={icon23} alt="homepage" width="25" height="25" />
                    Soaps          
                  </div>
                  <div  >
                    <img className='icon' src={icon24} alt="homepage" width="25" height="25" />
                    Living room           
                  </div>
                  <div   >
                    <img className='icon' src={icon25} alt="homepage" width="25" height="25" />
                   <text >Hair dryer </text>
                   </div>
                   <div   >
                    <img className='icon' src={icon26} alt="homepage" width="25" height="25" />
                   <text >Parasol </text>
                   </div>
                   <div   >
                    <img className='icon' src={icon27} alt="homepage" width="25" height="25" />
                   <text >Outdoor grill </text>
                   </div>

                </div>


                </div>
            </div>


            <div >
              <div>
                <h2>Distance</h2>
              </div>

              <div className='facilty' style={{display:'flex' ,flexWrap:'wrap'}}>
                <div className='villa_facilty11'  >
                  <div   >
                    <img className='icon' src={icon28} alt="homepage" width="25" height="25" />
                   <text >Sea </text>            
                  </div >
                  <div  >
                    <img className='icon' src={icon29} alt="homepage" width="25" height="25" />
                    City            
                  </div>
                  <div  >
                    <img className='icon' src={icon30} alt="homepage" width="25" height="25" />
                    Market         
                  </div>
                 
                
                </div>
              
                <div className='villa_facilty12'  >
                  <div   >
                    <img className='icon' src={icon31} alt="homepage" width="25" height="25" />
                   <text >Airport</text>            
                  </div >
                  <div  >
                    <img className='icon' src={icon32} alt="homepage" width="25" height="25" />
                    Restaurant            
                  </div>
                  <div  >
                    <img className='icon' src={icon33} alt="homepage" width="25" height="25" />
                    Ambulance       
                  </div>
              
                 

                </div>

                <div className='villa_facilty13'  >
                  <div>
                    <img className='icon' src={icon34} alt="homepage" width="25" height="25" />
                   <text >Beach </text>            
                  </div >
                  <div >
                    <img className='icon' src={icon35} alt="homepage" width="25" height="25" />
                    Hospital           
                  </div>                 
                </div>
              </div>
            </div>

              <div >
              <div>
                <h2>Kitchen & Dinning</h2>
              </div>

              <div className='facilty' style={{display:'flex' ,flexWrap:'wrap'}}>
                <div className='villa_facilty21'  >
                  <div   >
                    <img className='icon' src={icon36} alt="homepage" width="25" height="25" />
                   <text >Plates </text>
                  </div >
                  <div  >
                    <img className='icon' src={icon37} alt="homepage" width="25" height="25" />
                    Refrigerator
                  </div>
                
                </div>
              
                <div className='villa_facilty22'  >
                  <div   >
                    <img className='icon' src={icon38} alt="homepage" width="25" height="25" />
                   <text >Cooking utensils</text>            
                  </div >
                  <div  >
                    <img className='icon' src={icon39} alt="homepage" width="25" height="25" />
                    Dishwasher
                  </div>
                 
                </div>
                <div className='villa_facilty23'  >
                  <div   >
                    <img className='icon' src={icon40} alt="homepage" width="25" height="25" />
                   <text >Coffee machine </text>
                  </div >
                  <div  >
                    <img className='icon' src={icon41} alt="homepage" width="25" height="25" />
                    Oven
                  </div>
                </div>
                </div>
              </div>
          </div>
        </div>

        <div className='offer'  >
            <h1 style={{textAlign:'center' , marginTop:'50px'}}>
              Contact
            </h1>
            <div style={{ marginInline:'90px' }}>
              <div className='icon1' style={{display :'flex'}}>
              <img  src={icon42} alt="homepage" width="20" height="20" />
              +91 84515-84585
               
              </div>
              <div className='icon1' style={{display :'flex'}}>
              <img  src={icon43} alt="homepage" width="20" height="20" />
              nfo@gmail.com
               
              </div>
              <div  className='icon1'style={{display :'flex'}}>
              <img  src={icon44} alt="homepage" width="20" height="20" />
              www.villawebsite.com
               
              </div>
             <h5 style={{marginTop:'30px'}}> Preferred contact method: Email Languages: English , Croatia</h5> 
            </div>

            <div style={{marginInlineStart:'80px'}}>

              <div >
                <button style={{width: '250px' ,height:  '48px',gap: '8px' ,borderRadius: '0px 10px 10px 10px' ,opacity: '0px' ,fontSize: '16px' ,fontWeight: '600' ,lineHeight: '24px' ,textAlign: 'center' , padding:'center' , cursor:'pointer'
}}
                >Get An Offer</button>
              </div>
              <div>
                <button style={{width: '250px' ,height:  '48px',gap: '8px', background:'transparent' ,color:'white',border:'transparent' ,fontSize: '16px' ,fontWeight: '600' ,lineHeight: '24px' ,textAlign: 'center' , padding:'center' , cursor:'pointer'}}>
                  Ask us for help
                </button>
              </div>

            </div>
        </div>



      </div>
{/* /////////////////////////////////////////////////////////////////////////////////////////// */}

      <div className='section_3'>
        <div>
          <h1>Location</h1>
        </div>
        <div>
        <img className='map' src={map} alt="homepage" width="1200" height="350" />

        </div>

      </div>

{/* /////////////////////////////////////////////////////////////////////////////// */}


      <div className='section_4'>

        <div className='content_4'>
        <div>
           <h1> Availabilty</h1>

           <div>
            <div className="calendar">

              <Calendar   value={date} onChange={(e) => setDate(e.value)} inline showWeek className="calendar1" />
              <Calendar   value={date} onChange={(e) => setDate(e.value)} inline showWeek className="calendar2" />         
            </div>

            <div className='box_2'>

              <p className='First_text'>From <b> €350 / daily</b></p>
              <p className='second_text'>Total for 12 nights   <b>€5600</b></p>
              
            </div>
         </div>        
          </div>

          <div className='box_1'>
            <h1>Book Your Villa</h1>

            <div >
                <button style={{ fontSize: '16px', fontWeight: '600', lineHeight: '24px',textAlign: 'center' , alignItems:'center' , backgroundColor:'#5B656F',color:'white' ,borderRadius: '0px 10px 10px 10px',width:'223px',height:'43px',borderColor:'transparent',marginInlineStart:'42px', marginTop:'25px' , cursor:'pointer'}}
                >Call Owner <img  src={icon42} alt="homepage" width="20" height="20" /> </button>

                 <button style={{ fontSize: '16px', fontWeight: '600', lineHeight: '24px',textAlign: 'center' , alignItems:'center' , backgroundColor:'#5B656F',borderRadius: '0px 10px 10px 10px',width:'223px',height:'43px',borderColor:'transparent',marginInlineStart:'42px', marginTop:'25px',color:'white', cursor:'pointer'}}
                >Send Massage <img  src={icon45} alt="homepage" width="20" height="20" /> </button>

                 <button style={{ fontSize: '16px', fontWeight: '600', lineHeight: '24px',textAlign: 'center' , alignItems:'center' , backgroundColor:'#5B656F',borderRadius: '0px 10px 10px 10px',width:'223px',height:'43px',borderColor:'transparent',pointerEvents:'visible',marginInlineStart:'42px', marginTop:'25px',color:'white', cursor:'pointer'}}

                >Visit Website <img  src={icon44} alt="homepage" width="20" height="20" /> </button>

                <h5 style={{marginTop:'50px' , marginInlineStart:'25px'}}>Do not speak the language? No problem.</h5>

                <button style={{width: '250px' ,height:  '48px',gap: '8px', background:'transparent' ,color:'black',border:'transparent' ,fontSize: '16px' ,fontWeight: '600' ,lineHeight: '24px', marginInlineStart:'25px' }}>
                  Ask us for help
                </button>
                
              </div>

            </div>
  
        </div>    

      </div>

{/* ////////////////////////////////////////////////////////////////////////////////////// */}
      <div className='villaviewPage' style={villasbgimg}>
        <div className='villaView' >
          <div className='connection'>

          <div style={{background:'black' , color:'#F5E9D6' , borderRadius:'8px 80px 8px 8px' , width:'450px', height:'350px'}} >
          <h1 style={{textAlign:'center' , marginTop:'50px'}}>
            Let's connect 
          </h1>

      <div style={{display:'flex'}}>
        <div style={{marginInlineStart:'15px'}}>
          <h3>
            Phone
          </h3>
          <h3>
            Email
          </h3>
          <h3>
            Address
          </h3>
        </div>
        <div style={{marginInlineStart:'15px'}}>
          <h3>
            :
          </h3>
          <h3>
            :
          </h3>
          <h3>
            :
          </h3>
        </div>
        <div style={{marginInlineStart:'20px'}}>
          <h4>
            +00 00000 00000
          </h4>
          <h4>
            prospekt@prospekt.hr
          </h4>
          <h4>
            Prospekt Ltd Drazice 138, 51000 Rijeka Croatia
          </h4>
        </div>
      </div>
    </div>
    <div style={{background:'white', color:'black' ,textAlign:'center' , borderRadius:'8px 8px 80px 8px' , marginInlineStart:'60px' , height:'350px' }}>
    <form >
    <h1>We’d love to hear from you</h1>
    <input className="forminputVillaView" type="text" placeholder='Your name'  ></input>
    <input className="forminputVillaView" type="email" placeholder='Email' ></input>
    <input  type="textbox" placeholder='Massage' style={{ border:'none' ,borderBottom: '1px solid #000', paddingBottom: '30px',marginInlineStart:'10px',marginTop: "30px", width:"415px" }} ></input>
    <h5>
      I accept terms and condition
    </h5>
   <button style={{ height:"40px" ,width:'90px',background:'#5B656F' ,color:'white' , border:"none", borderRadius:'0px 10px 10px 10px', fontSize:'20px'}}>Send</button>
    
    </form>
  </div>
  </div>
  

</div>

      </div>

      <Footer/>
      <Outlet/>
    </div>

  </>
)}
export default VillaView