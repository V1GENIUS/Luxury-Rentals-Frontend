import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import image1 from '../Images/contact1img.png'
import '../Pages/Contact.css'



function Contact() {
  return (
    <>
      <div className='contactUs'>
      <Navbar/>
        <div style={{ marginTop:'0px' , textAlign:'center', }}>
          <h1 >
            Contact Us
          </h1>
          <h5>
            We're always here to answer your questions.
          </h5>
          <h5>
            Reach out and we'll get back to you as soon as possible.
          </h5>
        </div>
          
        <div className='contact_1'>
          <div style={{borderRadius: '80px'}}>
            <img className='contact1Img' src={image1} alt="Contact" width="480" height="380"  borderRadius="80" ></img>
          </div>
        
          <div  style={{backgroundColor:'#F5F3F1', width:'480px' , height :'380px',borderRadius: '0px 80px 0px 0px' }}>
              <h1 style={{textAlign:'center' , marginTop:'50px'}}>
                Let's connect 
              </h1>
              <div style={{display:'flex', width:'170px'}}>
                <div style={{marginInlineStart:'100px'}}>
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
        
        </div> 

        <div className='contact_2'>
          <div style={{ textAlign:'center' }}>
            <h1>
              Frequently asked questions
            </h1>
            <h5>
              Everything you need to know about the product and billing.
            </h5>
          </div>

          <div className='contact_3'>
            <div>
            <input className='frq_ask' type="text" value="+  Where can I find the offer of villa and service prices?"  readonly  />
            <input className='frq_ask' type="text" value="+  What is included in the price of Accommodation?"  readonly  />
            <input className='frq_ask' type="text" value="+  What is the procedure for arranging and booking Accommodation?"  readonly  />
            <input className='frq_ask' type="text" value="+  How do I pay the rest of the Accommodation price, at once or in several installments?"  readonly  />
            <input className='frq_ask' type="text" value="+  What if I am late with paying the advance payment or the remaning amount?"  readonly  />
            <input className='frq_ask' type="text" value="+  How can I cancel the Accommodation after having paid the advance payment or the remaining amount?"  readonly  />

            </div>
            <div style={{marginInlineStart:'40px'}}>
            <input className='frq_ask' type="text" value="+  Will I receive a refund of the advance payment or the remaining amount for the Accommodation in case of cancellation?"  readonly  />
            <input className='frq_ask' type="text" value="+  What are the terms of payment by bank transfer and can I pay by credit card?"  readonly  />
            <input className='frq_ask' type="text" value="+  Is it possible to rent the villa outside the Saturday to Saturday period?"  readonly  />
            <input className='frq_ask' type="text" value="+  Is a deposit required?"  readonly  />
            <input className='frq_ask' type="text" value="+  Is it possible to check in before the time period?"  readonly  />
            <input className='frq_ask' type="text" value="+  Is it cheaper if I book directly through the owner?"  readonly  />
            </div>
          </div>

<div style={{height:'200px'}}>
<div style={{background:'white', color:'black' ,textAlign:'center' , borderRadius:'8px 8px 80px 8px'  ,marginInlineStart:'160px', height:'350px', width:'1066px' , marginBottom:'500px',position:'absolute', justifySelf:'center' }}>
            <form >
             <h1 style={{paddingTop:'30px'}}>We’d love to hear from you</h1>
             <input className="contactforminput" type="text" placeholder='Your name'  ></input>
             <input className="contactforminput" type="email" placeholder='Email' ></input>
             <input  type="textbox" placeholder='Massage' style={{ border:'none' ,borderBottom: '1px solid #000', paddingBottom: '30px',marginInlineStart:'10px',marginTop: "30px", width:"815px" }} ></input>
             <h5> I accept terms and condition </h5>
             <button style={{ height:"40px" ,width:'80px',background:'#5B656F' ,color:'white' , border:"none", borderRadius:'0px 10px 10px 10px', fontSize:'20px'}}>Send</button>
          
            </form>
         
          </div>

</div>
         

        <Footer/>             
      </div>
     </div>
    
    </>
  )
}

export default Contact 