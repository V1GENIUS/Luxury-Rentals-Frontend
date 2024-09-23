import React from 'react'
import { Link } from 'react-router-dom'
import '../Components/Footer.css'

import icon1 from '../Icons/social-media.png'
import icon2 from '../Icons/youtube.png'
import icon3 from '../Icons/dribble.png'
import icon4 from '../Icons/figma.png'
import icon5 from '../Icons/whatsapp.png'

function Footer() {
  return (
    <>
    <div className='Footer'  >
      <div className='Footer_content'>

      

      <div  style={{marginInlineStart :'250px'}}>
     
      <div>
      <h4>LUXURY RENTALS</h4>
      </div>
      <div>
      <p>We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      

      </div>
      

      <div style={{marginInlineStart :'400px'}}>
        <div>
          <b>Connect With Us</b>
        </div>
        <div style={{marginTop:'20px'}}>
          <div>
            +91 91188-84487
          </div>
          <div style={{marginTop:'8px'}}>
          info@luxuryrentals.com
          </div>
         

        </div>
        

       <div className='social_icon'>
       <a href='https://www.facebook.com/' >
       <img className='scl_icn' src={icon1} alt='fb' width="20px" height='20px'></img></a>
       <a href='https://www.youtube.com/' >
       <img className='scl_icn' src={icon2} alt='fb' width="20px" height='20px'></img></a>
       <a href='https://www.dribble.com/' >
       <img className='scl_icn' src={icon3} alt='fb' width="20px" height='20px'></img></a>
       <a href='https://www.figma.com/' >
       <img className='scl_icn' src={icon4} alt='fb' width="20px" height='20px'></img></a>
       <a href='https://www.whatsapp.com/' >
       <img className='scl_icn' src={icon5} alt='fb' width="20px" height='20px'></img></a>
       

        
        
     

       </div>
        
      </div>


      </div>

      <div style={{display:"flex" , paddingLeft:'105px', paddingInlineEnd:'20px' , marginTop:'40px' } }>
        <div style={{paddingInlineStart:'45px'}}>
          
          <Link style={{textDecoration:'none', color : '#5B656F'}} to="/TermCondition" > <b>Terms & Condition </b></Link>  
        </div>
        <div style={{paddingInlineStart:'40px'}}>
        <Link style={{textDecoration:'none', color : '#5B656F'}} to="/VillaView" > <b>Privacy Notice Cookies </b></Link> 
        </div>
        <div style={{paddingInlineStart:'40px'}}>
        <Link style={{textDecoration:'none', color : '#5B656F'}} to="#Imprint" > <b> Imprint</b></Link> 
        </div>
        <div style={{paddingInlineStart :'305px'}}>
        <b>Luxury rentals | All rights reserved 2024-2025 </b>
      </div>
      </div>
     

      
    </div>


    
    </>
  )
}

export default Footer