import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../Pages/AboutUs.css'
import image1 from '../Images/aboutUsImg1.png'
import image2 from '../Images/aboutimg2.png'
import image3 from '../Images/aboutimg3.png'

function AboutUs() {
  return (

  <>  
    <div className='aboutUs'>
      <Navbar/>
      <div className='About_1'>
        <div style={{borderRadius:'8px, 8px, 80px, 8px' }}>
          <img src={image1} alt="homepage" width="450" height="400"></img>
        </div>  
       <div style={{marginInlineStart:'100px' , marginRight:'80px', marginTop:'40px', width:'450px', height:'400px' }}>
          <h1>
            Your peace of mind, Our priority
          </h1>
          <h5>
            Curabitur efficitur ante vel mi bibendum, et maximus nisl ultricies. Morbi nec tempus dui, sit amet facilisis nisl. <br/><br/>
            Curabitur efficitur luctus enim nec sollicitudin. Fusce venenatis venenatis lorem eu accumsan. Nunc sit amet mi vitae odio porttitor feugiat. Sed quis sem elementum, viverra ligula at, lobortis magna. Praesent congue nibh in dolor rutrum, et euismod quam elementum. <br/><br/>
            Mauris justo felis, iaculis quis sagittis sit amet, feugiat vitae est. Aliquam porta ex elit, sit amet rutrum turpis egestas viverra. Quisque at libero purus.
          </h5>
        </div>
      </div> 

      <div className='About_2'>
        
       <div style={{ width: '450px' ,height: '300px' , marginTop:'40px'}}>
          <h1>
            About Us
          </h1>
          <h5>
            Curabitur efficitur ante vel mi bibendum, et maximus nisl ultricies. Morbi nec tempus dui, sit amet facilisis nisl. <br/><br/>
            Curabitur efficitur luctus enim nec sollicitudin. Fusce venenatis venenatis lorem eu accumsan. Nunc sit amet mi vitae odio porttitor feugiat. Sed quis sem elementum, viverra ligula at, lobortis magna. Praesent congue nibh in dolor rutrum, et euismod quam elementum. <br/><br/>
            Mauris justo felis, iaculis quis sagittis sit amet, feugiat vitae est. Aliquam porta ex elit, sit amet rutrum turpis egestas viverra. Quisque at libero purus.
          </h5>
        </div>
        <div className='about2_img' style={{marginInlineStart:'100px', borderRadius:'6px, 60px, 6px, 6px' }}>
          <img className='image1' src={image2} alt="homepage" width="350" height="320" style={{borderRadius:'6px, 60px, 6px, 6px'}}></img>
          <img className='image2' src={image3} alt="homepage" width="250px" height="280px" style={{borderBlock:'5px',border: '5px solid white' , borderBlockColor:"white" , borderRadius:'6px 6px 6px 60px'}}></img>
        </div>  
      </div> 



      <div className='aboutUs_3' >
        <div className='Connection_aboutus'>

          <div style={{background:'black' , color:'#F5E9D6' , borderRadius:'8px 80px 8px 8px' , width:'450px', height:'350px'
          }} >
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
          <input className="forminput" type="text" placeholder='Your name'  ></input>
          <input className="forminput" type="email" placeholder='Email' ></input>
          <input  type="textbox" placeholder='Massage' style={{ border:'none' ,borderBottom: '1px solid #000', paddingBottom: '30px',marginInlineStart:'10px',marginTop: "30px", width:"415px" }} ></input>
          <h5>
            I accept terms and condition
          </h5>
         <button style={{ height:"40px" ,width:'90px',background:'#5B656F' ,color:'white' , border:"none", borderRadius:'0px 10px 10px 10px', fontSize:'20px'}}>Send</button>
          
          </form>
        </div>
        </div>
        

      </div>

      <Footer/>
    </div>
    
    </>
  )
}

export default AboutUs