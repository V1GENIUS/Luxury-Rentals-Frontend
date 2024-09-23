import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../Pages/Villas.css'
import Card from '../Components/card'


function VillaFilter() {
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
            <button style={{background:'transparent' , border:'transparent' , marginInlineStart:'330px' , fontSize:'15px' , color:'white', marginTop:'10px'}}>ADD FILTERS</button>
             


            <div className="">
              <div className="">
                <h2 className="">Filters</h2>
                <button variant="ghost" size="icon">
                  <DoorClosedIcon className="h-5 w-5" />
                </button>
              </div>
              <div className="">
                <div>
                  <h3 className="">Location</h3>
                  <div className="">
                    <div className="">
                      <checkbox id="seaside" />
                      <label htmlFor="seaside">Seaside</label>
                    </div>
                    <div className="">
                      <checkbox id="countryside" />
                      <label htmlFor="countryside">Countryside</label>
                    </div>
                    <div className="">
                      <checkbox id="village" />
                      <label htmlFor="village">Village</label>
                    </div>
                    <div className="">
                      <checkbox id="town" />
                      <label htmlFor="town">Town</label>
                    </div>
                    <div className="">
                      <checkbox id="mountains" />
                      <label htmlFor="mountains">Mountains</label>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="">Wellness</h3>
                  <div className="">
                    <div className="">
                      <checkbox id="swimming-pool" />
                      <label htmlFor="swimming-pool">Swimming pool</label>
                    </div>
                    <div className="">
                      <checkbox id="indoor-pool" />
                      <label htmlFor="indoor-pool">Indoor pool</label>
                    </div>
                    <div className="">
                      <checkbox id="jacuzzi" />
                      <label htmlFor="jacuzzi">Jacuzzi</label>
                    </div>
                    <div className="">
                      <checkbox id="fitness-gym" />
                      <label htmlFor="fitness-gym">Fitness/Gym</label>
                    </div>
                    <div className="">
                      <checkbox id="sauna" />
                      <label htmlFor="sauna">Sauna</label>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">Outdoor</h3>
                  <div className="">
                    <div className="">
                      <checkbox id="outdoor-dining-table" />
                      <label htmlFor="outdoor-dining-table">Outdoor dining table</label>
                    </div>
                    <div className="">
                      <checkbox id="outdoor-grill" />
                      <label htmlFor="outdoor-grill">Outdoor grill</label>
                    </div>
                    <div className="">
                      <checkbox id="boat-mooring" />
                      <label htmlFor="boat-mooring">Boat mooring</label>
                    </div>
                    <div className="">
                      <checkbox id="electric-car-charger" />
                      <label htmlFor="electric-car-charger">Electric car charger</label>
                    </div>
                    <div className="">
                      <checkbox id="private-parking" />
                      <label htmlFor="private-parking">Private parking</label>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">Activity</h3>
                  <div className="">
                    <div className="">
                      <checkbox id="playground" />
                      <label htmlFor="playground">Playground</label>
                    </div>
                    <div className="">
                      <checkbox id="playstation" />
                      <label htmlFor="playstation">Playstation</label>
                    </div>
                    <div className="">
                      <checkbox id="satellite-cable" />
                      <label htmlFor="satellite-cable">Satellite/Cable</label>
                    </div>
                    <div className="">
                      <checkbox id="table-tennis" />
                      <label htmlFor="table-tennis">Table tennis</label>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">Amenities</h3>
                  <div className="">
                    <div className="">
                      <checkbox id="fireplace" />
                      <label htmlFor="fireplace">Fireplace</label>
                    </div>
                    <div className="">
                      <checkbox id="air-conditioning" />
                      <label htmlFor="air-conditioning">Air conditioning</label>
                    </div>
                    <div className="">
                      <checkbox id="feeding-chair" />
                      <label htmlFor="feeding-chair">Feeding chair</label>
                      
                 

                    </div>
                    <div className="">
                      <checkbox id="iron-board" />
                      <label htmlFor="iron-board">Iron & Board</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <button variant="ghost" className="text-muted-foreground">
                  CLEAR ALL
                </button>
                <button variant="default">SHOW 24 VILLAS</button>
              </div>
            </div>
  

          </div>


          <div className='Cards'>
            <Card/>
           

          </div>
          <div className='page7'>

<div className='page__2'>
<div className='villa_2' >
  <div className='connection'>

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

export default VillaFilter

function DoorClosedIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
        <path d="M2 20h20" />
        <path d="M14 12v.01" />
      </svg>
    )
  }