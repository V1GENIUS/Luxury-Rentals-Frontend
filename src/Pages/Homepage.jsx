import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import "../Pages/Home.css"


// *******Images***************
import icon1 from '../Images/icon1.png'
import icon2 from '../Images/pow.png'
import icon3 from '../Images/electric-car.png'
import icon4 from '../Images/gym.png'
import icon5 from '../Images/mooring.png'
import icon6 from '../Images/users.png'
import icon7 from '../Images/bed.png'
import icon8 from '../Images/blueprint.png'
import icon9 from '../Images/bathtub.png'
import heart from '../Images/heart.png'
import region1 from '../Images/regions1img.png'
import region2 from '../Images/region2img.png'
import image2 from '../Images/aboutimg2.png'
import image3 from '../Images/aboutimg3.png'
import image4 from '../Images/topVillas1.png'
import image5 from '../Images/Rectangle 123.png'
import image6 from '../Images/Rectangle 123 (1).png'




function Homepage() {
  
  return (
    <>
    
    <div className='homepage' > 
      <div className='bg-image' >
        <Navbar/>
        <div className='heading_1'>
          <h1>BE OUR GUEST</h1>
        </div>

        <div className='Descrption_1' >
          <h3>LIVE LIKE A KING IN OUR BEST HOUSES</h3>
        </div>

        <div>
          <div >
            <form className='form'>
              <div className='select_item'>           
                <select   style={{ width: '150px', height: '50px', fontSize: '20px' , borderColor:'transparent',borderRadius: '5px' }}>
                    <option value="location">Location</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                  </select>
              </div>
              <div className='select_item' >           
                  <select style={{ width: '150px', height: '50px', fontSize: '15px',borderColor:'transparent' ,borderRadius: '5px' }}>
                    <option value="dates">Dates</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                  </select>
              </div>
              <div className='select_item'>           
                  <select  style={{ width: '150px', height: '50px', fontSize: '15px',borderColor:'transparent',borderRadius: '5px' }}>
                    <option value="guest">Guest</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                  </select>
              </div>
              <div className='select_item'>           
                  <select   style={{ width: '150px', height: '50px', fontSize: '20px' ,borderColor:'transparent',borderRadius: '5px'}}>
                    <option value="price">Price</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                  </select>
              </div>

              <div>
                <div>
                  <div>
                    <button  style={{fontSize:'20px' , height:'50px' ,width:'90px',marginTop:'5px', backgroundColor:'black' , color:'white', borderRadius:'0px 10px 10px 10px' }}>search</button>
                  </div>  
                </div>
              </div>    
            </form>
          </div>
        </div>
      </div>
    </div>
{/* //////////////////////////////////////////////////////////////////////////////////// */}

    <div className='section_2'>
      <div>
        <div style={{textAlign:'center'}} >
          <h1>Top Pick Villas</h1>
          <h5 >Curabitur efficitur ante vel mi bibendum, et maximus nisl ultricies. Morbi nec tempus dui, sit amet facilisis nisl.<br/> Ut vel urna quis urna tristique tempus. Etiam lobortis est at mauris eleifend, id tempor purus ultricies.</h5>
        </div>

        <div className='cards'>
          <div className='card'>
            <div>
              <img className='imgvilla' src={image4} alt="homepage" width="302" height="266" ></img>
              <div className='pricebox'>
               <text className='price'>From <b> € 280 / daily</b></text>
                 
              </div>
              <div className='pricebox'>
               <img className='heart' src={heart} alt="homepage" width="40" height="40" ></img>
              </div>
                
                
            <div className='white_box'style={{backgroundColor:'white' , marginTop:'-55px'}}>
              <div>
                <div className='location_2'>
                  <h4 style={{marginTop:'20px'}}>
                    Greece
                  </h4>
                  <li style={{marginInlineStart:'10px' ,marginTop:'20px'}}>
                    Seaside
                  </li>
                </div>
                    
                <div >
                  <h1 style={{marginInlineStart:'20px' , marginTop:'0px'}}>
                    Villa Roxane
                  </h1>
                </div>
              </div>



              <div className='card_des_box'>
                <div className='card_des_2'>
                  <img className='icon1' src={icon6} alt="homepage" width="20" height="20" ></img>                 
                  <text style={{marginInlineStart:'10px'}}><b>11</b> guest </text>
                </div>

                <div className='card_des_2'>
                  <img className='icon1' src={icon7} alt="homepage" width="20" height="20" ></img>
                  <text style={{marginInlineStart:'10px'}}><b>6</b> bedrooms </text> 
                </div>                             
              </div >
              <div className='card_des_box'>
                <div className='card_des_2'>
                  <img className='icon1' src={icon8} alt="homepage" width="20" height="20" ></img>
                  <text style={{marginInlineStart:'10px'}}><b>125</b> m<sup>2</sup> </text>
                </div>
                
                <div className='card_des_2'>
                  <img className='icon1' src={icon9} alt="homepage" width="20" height="20" ></img>
                  <text style={{marginInlineStart:'10px'}}><b>25</b> bathrooms </text>
                </div>
              </div>
            </div>
          </div>
                        
            </div> 
            <div className='card'>

              <div>
                <img className='imgvilla' src={image5} alt="homepage" width="302" height="266" ></img>
                <div className='pricebox'>
                  <text className='price'>From <b> € 110 / daily</b></text>
                 
                </div>
                <div className='pricebox'>
                <img className='heart' src={heart} alt="homepage" width="40" height="40" ></img>
                </div>
                
                <div className='white_box'  style={{backgroundColor:'white' , marginTop:'-55px'}}>
                  <div>
                    <div className='location_2'>
                      <h4 style={{marginTop:'20px'}}>
                        Greece
                      </h4>
                      <li style={{marginInlineStart:'10px' ,marginTop:'20px'}}>
                        Seaside
                      </li>
                    </div>
                    
                    <div >
                      <h1 style={{marginInlineStart:'20px' , marginTop:'0px'}}>
                        Aphrodit
                      </h1>
                    </div>
                  </div>

                  <div className='card_des_box'>

                    <div className='card_des_2'>
                      <img className='icon1' src={icon6} alt="homepage" width="20" height="20" ></img>
                      
                      <text style={{marginInlineStart:'10px'}}><b>12</b> guest </text>
                    </div>
                  

                    <div className='card_des_2'>
                      <img className='icon1' src={icon7} alt="homepage" width="20" height="20" ></img>
                      <text style={{marginInlineStart:'10px'}}><b>6</b> bedrooms </text> 
                    </div>

                  
    
                  </div >

                  <div className='card_des_box'>
              <div className='card_des_2'>
                  <img className='icon1' src={icon8} alt="homepage" width="20" height="20" ></img>
                  <text style={{marginInlineStart:'10px'}}><b>460</b> m<sup>2</sup> </text>
                </div>
            

                <div className='card_des_2'>
                  <img className='icon1' src={icon9} alt="homepage" width="20" height="20" ></img>
                  <text style={{marginInlineStart:'10px'}}><b>5</b> bathrooms </text>
                </div>
                  </div>
          </div>
          </div>
            </div> 
            <div className='card'>

              <div>
                <img className='imgvilla' src={image6} alt="homepage" width="302" height="266" ></img>
                <div className='pricebox'>
                  <text className='price'>From <b> € 240 / daily</b></text>
                 
                </div>
                <div className='pricebox'>
                <img className='heart' src={heart} alt="homepage" width="40" height="40" ></img>
                </div>
                
                <div className='white_box' style={{backgroundColor:'white' , marginTop:'-55px'}}>
                  <div>
                    <div className='location_2'>
                      <h4 style={{marginTop:'20px'}}>
                        Italy
                      </h4>
                      <li style={{marginInlineStart:'10px' ,marginTop:'20px'}}>
                        Moutains
                      </li>
                    </div>
                    
                    <div >
                      <h1 style={{marginInlineStart:'20px' , marginTop:'0px'}}>
                        Villa Makarska
                      </h1>
                    </div>
                  </div>

                  <div className='card_des_box'>

                    <div className='card_des_2'>
                      <img className='icon1' src={icon6} alt="homepage" width="20" height="20" ></img>
                      
                      <text style={{marginInlineStart:'10px'}}><b>8</b> guest </text>
                    </div>
  
                    <div className='card_des_2'>
                      <img className='icon1' src={icon7} alt="homepage" width="20" height="20" ></img>
                      <text style={{marginInlineStart:'10px'}}><b>8</b> bedrooms </text> 
                    </div>                  
                  </div >

                  <div className='card_des_box'>
                    <div className='card_des_2'>
                      <img className='icon1' src={icon8} alt="homepage" width="20" height="20" ></img>
                      <text style={{marginInlineStart:'10px'}}><b>460</b> m<sup>2</sup> </text>
                    </div>
                
                    <div className='card_des_2'>
                      <img className='icon1' src={icon9} alt="homepage" width="20" height="20" ></img>
                      <text style={{marginInlineStart:'10px'}}><b>4</b> bathrooms </text>
                    </div>
                  </div>
              </div>
            </div>
            </div>    
          </div>       
       </div>
     </div>
{/* //////////////////////////////////////////////////////////////////////////////////// */}
    <div className='regions' >
    
      <div  style={{textAlign:'center' , paddingTop:'10px'}}>
        <h1 >OUR REGIONS</h1>
      </div>
      <div style={{textAlign:'center' }}>
        <h5>Fusce blandit magna eget felis dapibus, ac lacinia quam faucibus. <br/>Quisque feugiat felis a quam volutpat, non scelerisque nibh scelerisque.</h5>
      </div>


      <div style={{display:'flex' , justifyContent:'center' }}>
        <div  class="relative">
        <img className='region1' src={region1} alt="Region1" width="400" height="400"></img>
        <div class="absolute">Moutains</div>
        <div class="absolute1">87 properties</div>
        </div> 
        <div class="relative">
        <img className='region1' src={region2} alt="Region2" width="400" height="400"></img>
        <div class="absolute">Costline</div>
        <div class="absolute1">67 properties</div>
        </div>
          
      </div>
     
    </div>
{/* //////////////////////////////////////////////////////////////////////////////////// */}
    <div >
      <div  style={{marginInlineStart:'37%'}}>
        <h1>Our properties specialities</h1>
      </div>
        <div className='prpt_des'>
          <div className='prpty1'>
           <img className='icon1' src={icon1} alt="homepage" width="40" height="40" ></img>
           <h2>Seafront</h2>
           <div style={{display:'flex'}}>
            <button className='prop_btn'>Have a look</button> <p>→</p>
           </div>
          </div>
        

          <div className='prpty1'>
            <img className='icon1' src={icon2} alt="homepage" width="40" height="40" ></img>
            <h2>Pet friendly</h2>
            <div style={{display:'flex'}}>
              <button className='prop_btn'>Pets allowed</button> <p>→</p>
            </div>
          </div>


            <div className='prpty1'>
              <img className='icon1' src={icon3} alt="homepage" width="40" height="40" ></img>
              <h2>Electric car</h2>
              <div style={{display:'flex'}}>
                <button className='prop_btn'>Charge your car</button> <p>→</p>
              </div>
            </div>

              <div className='prpty1'>
                <img className='icon1' src={icon4} alt="homepage" width="40" height="40" ></img>
                <h2>Fitness/Gym</h2>

                <div style={{display:'flex'}}>
                  <button className='prop_btn'>take a trip</button> <p>→</p>
                </div>
              </div>

              <div className='prpty1'>
                <img className='icon1' src={icon5} alt="homepage" width="40" height="40" ></img>
                <h2>Boat mooring</h2>

                <div style={{display:'flex'}}>
                  <button className='prop_btn'>Have a look</button> <p>→</p>
                </div>
              </div>

        </div>
      </div>
{/* //////////////////////////////////////////////////////////////////////////////////// */}

    <div className='page5'>
      <div className='container5'>
       <div className='contain5'>
        
        <h4>BECOME A HOST</h4>

        <h1> Become a host</h1>

        <p>Join the elite league of  hosts specializing in luxury villas<br/>and unlock a world of exclusive opportunities.</p>

        <button style={{backgroundColor:'#5B656F', border:'none' ,borderRadius:'12px 20px 12px 20px' , width:'336px' , height:'48px' ,color:'white' , fontSize:'20px'}}>
          JOIN TODAY
        </button>

      </div>

    </div>

     

    </div>

{/* /////////////////////////////////////////////////////////////////////////////////// */}

    <div className='About6'>
        
       <div style={{ width: '450px' ,height: '500px' , marginTop:'40px'}}>
          <h1>
            About Us
          </h1>
          <h5>
            Curabitur efficitur ante vel mi bibendum, et maximus nisl ultricies. Morbi nec tempus dui, sit amet facilisis nisl. <br/><br/>
            Curabitur efficitur luctus enim nec sollicitudin. Fusce venenatis venenatis lorem eu accumsan. Nunc sit amet mi vitae odio porttitor feugiat. Sed quis sem elementum, viverra ligula at, lobortis magna. Praesent congue nibh in dolor rutrum, et euismod quam elementum. <br/><br/>
            Mauris justo felis, iaculis quis sagittis sit amet, feugiat vitae est. Aliquam porta ex elit, sit amet rutrum turpis egestas viverra. Quisque at libero purus.
          </h5>
        </div>
        <div className='about2_img' style={{marginInlineStart:'80px', borderRadius:'6px, 60px, 6px, 6px' }}>
          <img className='image1' src={image2} alt="homepage" width="350" height="350" style={{borderRadius:'6px, 60px, 6px, 6px'}}></img>
          <img className='image2' src={image3} alt="homepage" width="250px" height="300px" style={{borderBlock:'5px',border: '5px solid white' , borderBlockColor:"white" , borderRadius:'6px 6px 6px 60px'}}></img>
        </div>  
      </div> 
{/* /////////////////////////////////////////////////////////////////////////////////// */}

      <div className='page7'>


      <div className='about_3' >
        <div className='connect'>

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
                  +91 98989-77657
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
          <input className="forminputhome" type="text" placeholder='Your name'  ></input>
          <input className="forminputhome" type="email" placeholder='Email' ></input>
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
  </>
    
  )
}

export default Homepage
