import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../Pages/Villas.css'
import { Link } from 'react-router-dom'
import Card from '../Components/card'


function Villas() {
  return (
    <>
    
    <div className='All_villa' >
    <Navbar/>
    <div style={{ marginTop:'0px' , textAlign:'center', color: 'white'}}>
    <h1>All Villas</h1>
    <h5>124 results</h5>
    </div>

       <div>
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
            <button style={{background:'transparent' , border:'transparent' , marginInlineStart:'330px' , fontSize:'15px' , color:'white', marginTop:'10px'}}>

            <Link className='nav_text' to="/VillaFilter" > <b>ADD FILTERS</b></Link>  
            </button>

          </div>

          <div className='Cards'>
            <Card/>
          </div>

          <div className='page7'>

           <div className='page__2'>
            <div className='villas_2' >
              <div className='connection_villa'>

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
            +91 84777-44171
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
        </div>

<Footer/>
        </div>
      
    </>
  )
}

export default Villas


